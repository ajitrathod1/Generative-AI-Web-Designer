const express = require('express');
const router = express.Router();
const aiService = require('../services/aiService');
const imageService = require('../services/imageService');

router.post('/generate', async (req, res) => {
    try {
        const { prompt, provider, apiKey } = req.body;
        const result = await aiService.generateText(prompt, provider, apiKey);
        res.json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

router.post('/generate-image', async (req, res) => {
    try {
        const { prompt, provider, apiKey } = req.body;
        // Default to huggingface if not specified
        const result = await imageService.generateImage(prompt, provider || 'huggingface', apiKey);
        res.json({ success: true, data: result });
    } catch (error) {
        console.error("Image Gen Error:", error);
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
