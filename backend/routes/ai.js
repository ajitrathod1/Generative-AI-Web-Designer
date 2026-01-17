const express = require('express');
const router = express.Router();
const aiService = require('../services/aiService');

router.post('/generate', async (req, res) => {
    try {
        const { prompt, provider, apiKey } = req.body;
        const result = await aiService.generateText(prompt, provider, apiKey);
        res.json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
