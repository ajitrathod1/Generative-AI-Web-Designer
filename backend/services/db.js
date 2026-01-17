const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, '../../database.json');

// Initialize Database if not exists
if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({ projects: [], history: [] }, null, 2));
}

const getDB = () => {
    try {
        return JSON.parse(fs.readFileSync(DB_FILE));
    } catch (e) {
        return { projects: [], history: [] };
    }
};

const saveDB = (data) => {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

module.exports = { getDB, saveDB };
