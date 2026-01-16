
import os

path = 'public/generator.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define anchors based on the corrupted file state
start_marker = "return 'Innovation delivered, excellence guaranteed.';\n    },"
# Finding the start of Module 2 is robust
end_marker = "// --- MODULE 2: THE ARTIST (Visual Asset Generator) ---"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1:
    print("Start marker not found")
    # Try alternate spacing
    start_marker = "return 'Innovation delivered, excellence guaranteed.';"
    start_idx = content.find(start_marker)
    if start_idx != -1:
         start_idx += len(start_marker) + 1 # Approximate

if end_idx == -1:
    print("End marker not found")
    exit(1)

# New Content construction
new_code = """

    // Real AI Implementation (Universal: OpenAI + Gemini)
    fetchRealAI: async (prompt, key) => {
        // 1. Check for OpenAI Key (starts with 'sk-')
        if (key.trim().startsWith('sk-')) {
            console.log('🧠 Detected OpenAI Key. Switching to GPT-4o...');
            try {
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${key}`
                    },
                    body: JSON.stringify({
                        model: "gpt-4o",
                        messages: [
                            { role: "system", content: "You are a UI/UX expert. Generate a JSON design spec for a landing page. Output JSON only." },
                            { role: "user", content: `Analyze this request: "${prompt}". 
                            
                            RETURN JSON with this structure:
                            {
                                "vibe": "string",
                                "palette": { "bg": "hex", "primary": "hex", "secondary": "hex", "text": "hex", "accent": "hex", "surface": "hex" },
                                "typography": { "head": "Google Font", "body": "Google Font", "googleFonts": "family=Font:wght@weights&display=swap" },
                                "ui": { "rounded": "px", "border": "css", "shadow": "css", "glass": boolean },
                                "tech": { "framework": "vanilla", "animations": "fade-slide", "effects": ["effect"] },
                                "content": {
                                    "brand": "Brand",
                                    "hero": { "headline": "Head", "subhead": "Sub", "cta": "Btn", "ctaSecondary": "Btn2" },
                                    "features": [{ "icon": "star", "title": "Feat", "desc": "Desc" }],
                                    "testimonials": [{ "name": "Name", "role": "Role", "text": "Quote", "rating": 5 }],
                                    "pricing": [{ "name": "Plan", "price": "$10", "period": "/mo", "features": ["f1"], "highlight": false }],
                                    "footer": { "tagline": "Tag", "links": { "product": [], "company": [], "legal": [] }, "social": ["twitter"] }
                                },
                                "sections": { "hero": true, "features": true, "testimonials": true, "pricing": true, "gallery": false, "cta": true, "footer": true },
                                "imagePrompts": { "background": "midjourney prompt", "hero": "midjourney prompt" }
                            }` }
                        ],
                        response_format: { type: "json_object" }
                    })
                });

                const data = await response.json();
                if (!response.ok) throw new Error(data.error?.message || 'OpenAI API Failed');
                
                const parsed = JSON.parse(data.choices[0].message.content);
                parsed.mode = 'ONLINE_GPT_4o';
                return parsed;
            } catch (e) {
                throw new Error(`OpenAI Failed: ${e.message}`);
            }
        }

        // 2. Default: Google Gemini (Looping Fallback)
        const models = ['gemini-1.5-flash', 'gemini-1.5-flash-001', 'gemini-1.5-pro', 'gemini-pro', 'gemini-1.0-pro'];
        let lastError = null;

        const systemInstruction = `
        You are a SENIOR FULL-STACK DEVELOPER & UI/UX ARCHITECT.
        Analyze the user's landing page request and generate a COMPLETE, PROFESSIONAL design specification.
        RETURN ONLY VALID JSON (no markdown).
        {
            "vibe": "string (saas-clean | fantasy-cinematic | gaming-action | ai-neon | ecommerce-modern | creative-portfolio)",
            "palette": { "bg": "hex", "primary": "hex", "secondary": "hex", "text": "hex", "accent": "hex", "surface": "hex" },
            "typography": { "head": "Google Font", "body": "Google Font", "googleFonts": "family=Font:wght@weights&display=swap" },
            "ui": { "rounded": "px", "border": "css", "shadow": "css", "glass": boolean },
            "tech": { "framework": "vanilla", "animations": "fade-slide", "effects": ["effect"] },
            "content": {
                "brand": "Brand",
                "hero": { "headline": "Head", "subhead": "Sub", "cta": "Btn", "ctaSecondary": "Btn2" },
                "features": [{ "icon": "star", "title": "Feat", "desc": "Desc" }],
                "testimonials": [{ "name": "Name", "role": "Role", "text": "Quote", "rating": 5 }],
                "pricing": [{ "name": "Plan", "price": "$10", "period": "/mo", "features": ["f1"], "highlight": false }],
                "footer": { "tagline": "Tag", "links": { "product": [], "company": [], "legal": [] }, "social": ["twitter"] }
            },
            "sections": { "hero": true, "features": true, "testimonials": true, "pricing": true, "gallery": false, "cta": true, "footer": true },
            "imagePrompts": { "background": "midjourney prompt", "hero": "midjourney prompt" }
        }`;

        for (const model of models) {
            try {
                console.log(`🧠 Trying AI Model: ${model}...`);
                const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;

                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{ text: systemInstruction + "\\n\\nUser Request: " + prompt }]
                        }]
                    })
                });

                const data = await response.json();
                if (!response.ok) throw new Error(data.error?.message || `Model ${model} failed`);
                if (!data.candidates || !data.candidates[0]) throw new Error('No response');

                const rawText = data.candidates[0].content.parts[0].text;
                const jsonStr = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
                const parsed = JSON.parse(jsonStr);
                parsed.mode = `ONLINE_GEMINI_AI (${model})`;
                
                console.log(`✅ Success with model: ${model}`);
                return parsed;

            } catch (e) {
                console.warn(`⚠️ Model ${model} failed:`, e.message);
                lastError = e;
            }
        }
        throw lastError || new Error("All Gemini models failed. API Key might be invalid.");
    }
};

"""

# Combine
# Start part keeps header up to Tagline func
# End part starts from Module 2: The Artist
final_content = content[:start_idx + len(start_marker)] + new_code + content[end_idx:]

# Handle the curly brace closure for AI_Brain based on logic:
# 'start_marker' ends with '},' so we are inside AI_Brain.
# 'new_code' ends with '};', so we close AI_Brain.
# 'content[end_idx:]' starts with '// --- MODULE 2...', so it's clean.

with open(path, 'w', encoding='utf-8') as f:
    f.write(final_content)

print("SUCCESS: File patched.")
