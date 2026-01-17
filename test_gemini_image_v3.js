require('dotenv').config();
const fetch = require('node-fetch');

async function testGeminiImage() {
    const apiKey = process.env.GEMINI_API_KEY;
    const model = 'gemini-2.0-flash-exp-image-generation'; // Explicit image model

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:predict?key=${apiKey}`; // Predict is sometimes used for specialized models
    const urlGen = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    console.log(`Testing Gemini Image Gen with model: ${model}`);

    const payload = {
        contents: [{
            parts: [{ text: "Generate an image of a futuristic neon city" }]
        }],
        generationConfig: {
            responseMimeType: "image/jpeg"
        }
    };

    try {
        console.log("Trying generateContent endpoint...");
        const response = await fetch(urlGen, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("❌ API Error:", JSON.stringify(data, null, 2));
        } else {
            console.log("✅ Success!");
            if (data.candidates && data.candidates[0].content && data.candidates[0].content.parts) {
                const part = data.candidates[0].content.parts[0];
                if (part.inlineData) console.log("IMAGE FOUND!");
                else console.log("Text/Other found:", part);
            }
        }

    } catch (e) {
        console.error("❌ Script Error:", e);
    }
}

testGeminiImage();
