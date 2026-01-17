const { getDB, saveDB } = require('../services/db');

exports.getHistory = (req, res) => {
    try {
        const db = getDB();
        res.json(db.history || []);
    } catch (error) {
        res.status(500).json({ error: 'Failed to access history' });
    }
};

exports.addToHistory = (req, res) => {
    try {
        const db = getDB();
        const newItem = {
            id: Date.now(),
            ...req.body,
            timestamp: new Date().toISOString()
        };

        if (!db.history) db.history = [];

        // Keep only last 50 items
        db.history.push(newItem);
        if (db.history.length > 50) db.history.shift();

        saveDB(db);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save history' });
    }
};

exports.clearHistory = (req, res) => {
    try {
        const db = getDB();
        db.history = [];
        saveDB(db);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Failed to clear history' });
    }
};
