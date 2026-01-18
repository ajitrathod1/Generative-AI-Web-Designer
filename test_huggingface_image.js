require('dotenv').config();
const fetch = require('node-fetch');
const fs = require('fs');

async function testHuggingFaceImage() {
    const apiKey = process.env.HUGGINGFACE_API_KEY;
    if (!apiKey) {
        console.error("❌ No process.env.HUGGINGFACE_API_KEY found. Please add it to your .env file.");
        return;
    }

    // Using FLUX.1-dev (popular high-quality model on HF)
    const model = 'black-forest-labs/FLUX.1-dev';

    // Alternative models if FLUX requires pro/access:
    // const model = 'stabilityai/stable-diffusion-xl-base-1.0';

    const url = `https://api-inference.huggingface.co/models/${model}`;

    console.log(`Testing Hugging Face Image Gen with model: ${model}`);

    const payload = {
        inputs: "A futuristic neon city with flying cars, cyberpunk style, high resolution, 8k",
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`❌ API Error (${response.status}):`, errorText);

            if (response.status === 503) {
                console.log("⏳ Model is loading (cold boot). Wait a bit and try again.");
            }
        } else {
            console.log("✅ Success! Receiving image data...");
            const buffer = await response.buffer();
            const fileName = 'test_hf_output.jpg';
            fs.writeFileSync(fileName, buffer);
            console.log(`📸 Image saved to ${fileName}`);
        }

    } catch (e) {
        console.error("❌ Script Error:", e);
    }
}

testHuggingFaceImage();
