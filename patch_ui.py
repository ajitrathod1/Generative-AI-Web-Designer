
import re
import os

path = 'public/generator.js'

if not os.path.exists(path):
    print("Error: File not found")
    exit(1)

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update startAIPipeline & saveProject
# Remove reading of checkboxes (incHero, incFeatures, etc)
# Pattern matches the object property definition spanning multiple lines
content = re.sub(
    r"hero:\s*document\.getElementById\('incHero'\)\.checked,[\s\S]*?footer:\s*document\.getElementById\('incFooter'\)\.checked",
    "hero: true, features: true, pricing: true, footer: true",
    content
)

# 2. Update loadProject (LocalStorage & Server)
# Remove setting of checkboxes
content = re.sub(
    r"document\.getElementById\('incHero'\)\.checked = project\.hero;[\s\S]*?document\.getElementById\('incFooter'\)\.checked = project\.footer;",
    "// Structure prefs handled by AI",
    content
)

# 3. Append New Logic
new_logic = """

// ==========================================
// 🚀 NEW FEATURES: FULL SCREEN & CHAT EDIT
// ==========================================

// === FULL SCREEN LOGIC ===
window.toggleFullScreen = () => {
    document.querySelector('.app-container').classList.toggle('fullscreen-mode');
};

// === AI CHAT EDIT LOGIC ===
window.handleEditInput = (e) => {
    if (e.key === 'Enter') submitEditRequest();
};

window.submitEditRequest = async () => {
    const input = document.getElementById('editPromptInput');
    const prompt = input.value.trim();
    if (!prompt) return;

    // UI Updates
    const history = document.getElementById('editChatHistory');
    history.innerHTML += `<div class='user-msg'>${prompt}</div>`;
    history.scrollTop = history.scrollHeight;
    input.value = '';
    
    // Add loading bubble
    const loadingId = 'loading-' + Date.now();
    history.innerHTML += `<div id='${loadingId}' class='ai-msg'>Thinking... 🧠</div>`;

    try {
        const frame = document.getElementById('previewFrame');
        // Get code (Handle empty frame case)
        let currentCode = "";
        try {
            currentCode = frame.contentWindow.document.documentElement.outerHTML;
        } catch(e) { currentCode = "<html><body></body></html>"; }

        const apiKey = document.getElementById('apiKey').value;

        // Use AI to edit code
        const updatedCode = await AI_Brain.editCode(currentCode, prompt, apiKey);
        
        // Apply Changes
        const doc = frame.contentWindow.document;
        doc.open(); doc.write(updatedCode); doc.close();
        document.getElementById('codeTextarea').value = updatedCode; // Sync raw editor

        // Success Msg
        document.getElementById(loadingId).textContent = "Done! I've updated the design. 🎨";
        
        // Save to History automatically? Maybe later.
        
    } catch (e) {
        document.getElementById(loadingId).textContent = "Error: " + e.message;
        console.error(e);
    }
};

// Add editCode capability to Brain
AI_Brain.editCode = async (code, prompt, key) => {
    if (!key || key.length < 5) throw new Error("Please enter your API Key first!");

    const systemInstruction = `
    You are an expert Frontend Developer.
    The user wants to EDIT the following HTML code.
    User Request: "${prompt}"
    
    Rules:
    1. Return ONLY the updated full HTML code.
    2. Do NOT use markdown code blocks.
    3. Maintain all existing scripts and styles unless asked to change.
    4. Be creative but preserve the layout unless asked to redesign.
    `;

    const isOpenAI = key.startsWith('sk-');
    
    if (isOpenAI) {
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${key}` },
            body: JSON.stringify({
                model: "gpt-4o",
                messages: [
                    { role: "system", content: "You are a web developer. Return only HTML code." },
                    { role: "user", content: `CODE:\n${code.substring(0, 15000)}\n\nINSTRUCTION: ${prompt}\n\nOUTPUT FULL UPDATED HTML:` }
                ]
            })
        });
        const data = await res.json();
        if (data.error) throw new Error(data.error.message);
        return data.choices[0].message.content.replace(/```html/g, '').replace(/```/g, '');
    } else {
        // Gemini (Try robust models)
        // We will try gemini-1.5-flash then pro
        const models = ['gemini-1.5-flash', 'gemini-1.5-pro', 'gemini-pro'];
        let lastError = null;
        
        for (const model of models) {
            try {
                const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
                const res = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{ text: systemInstruction + "\\n\\nCODE:\\n" + code.substring(0, 30000) }]
                        }]
                    })
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.error?.message || 'Failed');
                
                return data.candidates[0].content.parts[0].text.replace(/```html/g, '').replace(/```/g, '');
            } catch (e) {
                lastError = e;
                console.warn(`Edit Model ${model} failed`, e);
            }
        }
        throw lastError;
    }
};
"""

with open(path, 'w', encoding='utf-8') as f:
    f.write(content + new_logic)

print("UI Logic Patched Successfully")
