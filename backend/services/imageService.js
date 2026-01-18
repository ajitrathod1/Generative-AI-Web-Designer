const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const generateImage = async (prompt, provider = 'huggingface', userApiKey) => {

    let apiKey = userApiKey || process.env.HUGGINGFACE_API_KEY;

    // Logic to select model/provider
    if (provider === 'huggingface') {
        if (!apiKey) throw new Error("Hugging Face API Key is missing. Please add HUGGINGFACE_API_KEY to .env");

        // Model selection (FLUX is great for general purpose)
        const model = 'black-forest-labs/FLUX.1-dev';
        const url = `https://api-inference.huggingface.co/models/${model}`;

        console.log(`[IMAGE SERVICE] Generating image with ${model} for prompt: "${prompt.substring(0, 50)}..."`);

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ inputs: prompt })
            });

            if (!response.ok) {
                const error = await response.text();
                throw new Error(`HF API ${response.status}: ${error}`);
            }

            const buffer = await response.buffer();

            // Save image locally so frontend can serve it
            // Ensure path exists: public/assets/generated
            const outDir = path.join(__dirname, '../../public/assets/generated');
            if (!fs.existsSync(outDir)) {
                fs.mkdirSync(outDir, { recursive: true });
            }

            const fileName = `gen_${crypto.randomUUID()}.jpg`;
            const filePath = path.join(outDir, fileName);

            fs.writeFileSync(filePath, buffer);
            console.log(`[IMAGE SERVICE] Saved to ${fileName}`);

            return {
                success: true,
                url: `/assets/generated/${fileName}`,
                provider: 'huggingface'
            };

        } catch (error) {
            console.error("[IMAGE SERVICE ERROR]", error.message);
            throw error;
        }
    }

    throw new Error(`Provider ${provider} not supported for image generation.`);
};

module.exports = { generateImage };
