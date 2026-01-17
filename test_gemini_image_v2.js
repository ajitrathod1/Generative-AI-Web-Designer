require('dotenv').config();
const fetch = require('node-fetch');
const fs = require('fs');

async function testGeminiImage() {
    const apiKey = process.env.GEMINI_API_KEY;
    const model = 'gemini-2.0-flash-exp'; // Trying the main model first as docs say it has image capability

    // Also try explicit image model if available
    // const model = 'gemini-2.0-flash-exp-image-generation'; 

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    console.log(`Testing Gemini Image Gen with model: ${model}`);

    const payload = {
        contents: [{
            parts: [{ text: "Generate an image of a futuristic neon city" }]
        }],
        // This config is sometimes needed for image generation in multi-modal models
        generationConfig: {
            responseMimeType: "image/jpeg"
        }
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("❌ API Error:", JSON.stringify(data, null, 2));

            // If 400, try without responseMimeType (maybe it's text-only model or different payload)
            if (response.status === 400 && data.error && data.error.message.includes('generation_config')) {
                console.log("Retrying without mimeType constraint...");
                // Retry logic here if needed, or just manual test changes
            }

        } else {
            console.log("✅ Success!");
            if (data.candidates && data.candidates[0].content && data.candidates[0].content.parts) {
                const parts = data.candidates[0].content.parts;
                let foundImage = false;
                parts.forEach((part, index) => {
                    if (part.inlineData) {
                        console.log(`📸 Part ${index}: Image received! MimeType: ${part.inlineData.mimeType}, Size: ${part.inlineData.data.length} chars`);
                        foundImage = true;
                    } else if (part.text) {
                        console.log(`📝 Part ${index}: Text: ${part.text.substring(0, 50)}...`);
                    }
                });
                if (!foundImage) console.log("⚠️ No inlineData (image) found in response.");
            } else {
                console.log("🤔 Unexpected structure:", JSON.stringify(data, null, 2));
            }
        }

    } catch (e) {
        console.error("❌ Script Error:", e);
    }
}

testGeminiImage();
