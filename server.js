require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Enterprise Services & Routes
const projectRoutes = require('./backend/routes/projects');
const historyRoutes = require('./backend/routes/history');
const aiRoutes = require('./backend/routes/ai');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// API Versioning (Enterprise Best Practice)
app.use('/api/v1/projects', projectRoutes);
app.use('/api/v1/history', historyRoutes);
app.use('/api/v1/ai', aiRoutes);

// Legacy/Root redirects if needed (or just serving index)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('[SERVER ERROR]', err.stack);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`\n🚀 VISIONS AI ENTERPRISE SERVER RUNNING!`);
    console.log(`👉 Dashboard: http://localhost:${PORT}`);
    console.log(`🔌 API Gateway: http://localhost:${PORT}/api/v1`);
    console.log(`📁 Microservices Active: [Projects, AI_Gateway]`);
    if (process.env.GEMINI_API_KEY) console.log(`🔑 Gemini API Key detected: Yes`);
    else console.log(`⚠️ Gemini API Key detected: No`);

    if (process.env.OPENAI_API_KEY) console.log(`🔑 OpenAI API Key detected: Yes`);
    else console.log(`⚠️ OpenAI API Key detected: No`);
    console.log('\n');
});
