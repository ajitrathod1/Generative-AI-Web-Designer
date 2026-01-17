const fetch = require('node-fetch');

// This logic mimics the frontend 'AI_Brain.fetchRealAI' but runs securely on server
const generateText = async (prompt, provider = 'gemini', apiKey) => {

    // Instructions (same as helper logic in frontend)
    const systemInstruction = `
    You are an expert UI/UX Design Engine.
    Convert the user's description into a JSON specification for a single-page landing page.
    The response must be valid JSON strictly matching this structure:
    {
        "vibe": "string (one of: saas-clean, gaming-action, ai-neon, ecommerce-modern, fantasy-cinematic, creative-portfolio, fitness-energy, glass-modern)",
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
        "sections": { "hero": true, "features": true, "testimonials": true, "pricing": true, "gallery": false, "cta": true, "footer": true }
    }
    Rules:
    - Return ONLY the raw JSON string without markdown code blocks.
    - Be creative with colors and copy.
    `;

    console.log(`[AI SERVICE] Calling ${provider} for prompt: "${prompt.substring(0, 30)}..."`);

    try {
        if (provider === 'gemini') {
            const models = ['gemini-1.5-flash', 'gemini-1.5-pro', 'gemini-pro'];
            let lastError = null;

            for (const model of models) {
                try {
                    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

                    const response = await fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            contents: [{
                                parts: [{ text: systemInstruction + "\n\nUser Request: " + prompt }]
                            }]
                        })
                    });

                    const data = await response.json();

                    if (!response.ok) throw new Error(data.error?.message || `Model ${model} failed`);
                    if (!data.candidates || !data.candidates[0]) throw new Error('No response candidates');

                    const rawText = data.candidates[0].content.parts[0].text;
                    const jsonStr = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
                    const parsed = JSON.parse(jsonStr);
                    parsed.mode = `SERVER_GEMINI (${model})`;
                    return parsed;

                } catch (e) {
                    console.warn(`[AI SERVICE] ${model} failed:`, e.message);
                    lastError = e;
                }
            }
            throw lastError || new Error("All Gemini models failed");
        }

        else if (provider === 'openai') {
            const url = 'https://api.openai.com/v1/chat/completions';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: "gpt-4o",
                    messages: [
                        { role: "system", content: systemInstruction },
                        { role: "user", content: prompt }
                    ],
                    temperature: 0.7
                })
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.error?.message || "OpenAI failed");

            const rawText = data.choices[0].message.content;
            const jsonStr = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
            const parsed = JSON.parse(jsonStr);
            parsed.mode = `SERVER_OPENAI (GPT-4o)`;
            return parsed;
        }

        throw new Error("Invalid Provider");

    } catch (e) {
        console.error("[AI SERVICE ERROR]", e);
        throw e;
    }
};

module.exports = { generateText };
