const { getDB, saveDB } = require('../services/db');

exports.getAllProjects = (req, res) => {
    try {
        const db = getDB();
        res.json(db.projects);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
};

exports.createProject = (req, res) => {
    try {
        const db = getDB();
        const newProject = {
            id: Date.now(),
            ...req.body,
            timestamp: new Date().toISOString()
        };
        db.projects.push(newProject);
        saveDB(db);
        res.json({ success: true, project: newProject });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create project' });
    }
};

exports.deleteProject = (req, res) => {
    try {
        const db = getDB();
        const id = parseInt(req.params.id);
        db.projects = db.projects.filter(p => p.id !== id);
        saveDB(db);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete project' });
    }
};
