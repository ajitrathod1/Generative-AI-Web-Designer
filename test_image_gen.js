require('dotenv').config();
const fetch = require('node-fetch');

async function testImageGen() {
    const apiKey = process.env.GEMINI_API_KEY;
    const model = 'gemini-2.0-flash-exp-image-generation'; // trying this again
    // also try 'gemini-2.5-flash-image' if this fails

    // const model = 'gemini-2.5-flash-image';

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    console.log(`Testing Image Gen with model: ${model}`);

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: "Generate an image of a futuristic cyberpunk city with neon lights." }]
                }]
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("❌ API Error:", JSON.stringify(data, null, 2));
        } else {
            console.log("✅ Success!");
            if (data.candidates && data.candidates[0].content.parts) {
                const part = data.candidates[0].content.parts[0];
                if (part.inlineData) {
                    console.log("📸 Image received! MimeType:", part.inlineData.mimeType);
                    console.log("   Base64 Length:", part.inlineData.data.length);
                } else if (part.text) {
                    console.log("📝 Text received:", part.text);
                }
            } else {
                console.log("🤔 Unexpected response structure:", JSON.stringify(data, null, 2));
            }
        }

    } catch (e) {
        console.error("❌ Network/Script Error:", e);
    }
}

testImageGen();
