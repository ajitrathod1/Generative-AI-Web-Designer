const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DB_FILE = path.join(__dirname, 'database.json');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve frontend files from public folder

// Initialize Database
if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({ projects: [], history: [] }));
}

// Utility to read/write DB
const getDB = () => JSON.parse(fs.readFileSync(DB_FILE));
const saveDB = (data) => fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));

// === API ROUTES ===

// 1. Get All Projects
app.get('/api/projects', (req, res) => {
    const db = getDB();
    res.json(db.projects);
});

// 2. Save Project
app.post('/api/projects', (req, res) => {
    const db = getDB();
    const newProject = {
        id: Date.now(),
        ...req.body,
        timestamp: new Date().toISOString()
    };
    db.projects.push(newProject);
    saveDB(db);
    res.json({ success: true, project: newProject });
});

// 3. Delete Project
app.delete('/api/projects/:id', (req, res) => {
    const db = getDB();
    const id = parseInt(req.params.id);
    db.projects = db.projects.filter(p => p.id !== id);
    saveDB(db);
    res.json({ success: true });
});

// 4. Get History
app.get('/api/history', (req, res) => {
    const db = getDB();
    res.json(db.history);
});

// 5. Save History
app.post('/api/history', (req, res) => {
    const db = getDB();
    const newItem = {
        id: Date.now(),
        ...req.body,
        timestamp: new Date().toISOString()
    };

    // Keep only last 50 items
    db.history.push(newItem);
    if (db.history.length > 50) db.history.shift();

    saveDB(db);
    res.json({ success: true });
});

// 6. Clear History
app.delete('/api/history', (req, res) => {
    const db = getDB();
    db.history = [];
    saveDB(db);
    res.json({ success: true });
});

// Start Server
app.listen(PORT, () => {
    console.log(`\n🚀 VISIONS AI SERVER RUNNING!`);
    console.log(`👉 Open http://localhost:${PORT} in your browser`);
    console.log(`🔌 API endpoint: http://localhost:${PORT}/api\n`);
});
