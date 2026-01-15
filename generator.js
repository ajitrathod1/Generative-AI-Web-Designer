// VISIONS ENGINE 2.0: THE CREATIVE DIRECTOR
// Now supports Procedural CSS Art, Advanced Motion, and Organic Layouts.

// --- 1. THE ASSET GENERATOR (CSS ART) ---
// Generates cool background shapes if no image matches.
const geometryEngine = {
    getMeshGradient: (colors) => `
        background-color: ${colors.bg};
        background-image: 
            radial-gradient(at 0% 0%, ${colors.primary}50 0px, transparent 50%),
            radial-gradient(at 100% 0%, ${colors.accent}50 0px, transparent 50%),
            radial-gradient(at 100% 100%, ${colors.primary}50 0px, transparent 50%);
        filter: blur(80px);
        opacity: 0.6;
        position: absolute; inset: 0; z-index: -1;
    `,
    getGrid: (color) => `
        background-image: linear-gradient(${color}20 1px, transparent 1px),
        linear-gradient(90deg, ${color}20 1px, transparent 1px);
        background-size: 40px 40px;
        mask-image: radial-gradient(circle at center, black, transparent 80%);
        position: absolute; inset: 0; z-index: -1; opacity: 0.5;
    `,
    getOrb: (color) => `
        width: 300px; height: 300px;
        background: radial-gradient(circle, ${color}, transparent 70%);
        position: absolute; border-radius: 50%;
        filter: blur(40px); opacity: 0.8;
        animation: floatOrb 10s infinite alternate;
    `
};

// --- 2. THE DESIGN SYSTEM ---
const designSystem = {
    colors: {
        cyber: { primary: '#00f3ff', bg: '#050505', text: '#ffffff', accent: '#ff0055' },
        luxury: { primary: '#d4af37', bg: '#0a0a0a', text: '#f5f5f5', accent: '#ffffff' },
        fresh: { primary: '#00b894', bg: '#ffffff', text: '#2d3436', accent: '#55efc4' },
        creative: { primary: '#6c5ce7', bg: '#0f0c29', text: '#ffffff', accent: '#fd79a8' }, // Dark Purple
        warm: { primary: '#e17055', bg: '#fff3e0', text: '#2d3436', accent: '#fab1a0' }
    },
    fonts: {
        modern: { head: 'Space Grotesk', body: 'Inter' },
        elegant: { head: 'Playfair Display', body: 'Lato' },
        tech: { head: 'Rajdhani', body: 'Inter' }
    },
    images: {
        gaming: 'assets/hero_gaming_cyborg.png',
        ai: 'assets/hero_ai_robot.png',
        gym: 'assets/hero_fitness_gym.png',
        coffee: 'assets/hero_coffee_cup.png'
    }
};

// --- 3. THE BRAIN (Logic) ---
function analyzePrompt(prompt) {
    const p = prompt.toLowerCase();
    let dna = {
        theme: 'fresh', // default
        font: 'modern',
        shape: 'rounded', // rounded, sharp, pill
        layout: 'split',  // split, center
        image: null,
        effects: [] // glass, glow, grid
    };

    // Keyword Mapping
    if (p.includes('game') || p.includes('cyber') || p.includes('neon')) {
        dna.theme = 'cyber'; dna.font = 'tech'; dna.shape = 'sharp'; dna.image = designSystem.images.gaming;
        dna.effects.push('grid', 'glow');
    }
    else if (p.includes('luxury') || p.includes('gold') || p.includes('premium')) {
        dna.theme = 'luxury'; dna.font = 'elegant'; dna.shape = 'sharp'; dna.image = designSystem.images.ai; // Abstract
        dna.layout = 'center';
    }
    else if (p.includes('design') || p.includes('creative') || p.includes('art')) {
        dna.theme = 'creative'; dna.font = 'modern'; dna.shape = 'pill';
        dna.effects.push('mesh'); // Mesh gradients for creative
    }
    else if (p.includes('coffee') || p.includes('warm') || p.includes('cozy')) {
        dna.theme = 'warm'; dna.font = 'modern'; dna.shape = 'rounded'; dna.image = designSystem.images.coffee;
    }
    else if (p.includes('gym') || p.includes('fitness')) {
        dna.theme = 'fresh'; dna.font = 'modern'; dna.shape = 'sharp'; dna.image = designSystem.images.gym;
        dna.effects.push('glitch');
    }

    return dna;
}

// --- 4. THE GENERATOR ---
function generateSite() {
    const prompt = document.getElementById('aiPrompt').value || "Creative Agency";
    const projectName = document.getElementById('projectName').value || "Brand";
    const dna = analyzePrompt(prompt);

    const colors = designSystem.colors[dna.theme];
    const fonts = designSystem.fonts[dna.font];

    const frame = document.getElementById('previewFrame');
    const doc = frame.contentWindow.document;

    // Construct Assets (Backgrounds)
    let bgLayer = '';
    if (dna.effects.includes('mesh')) bgLayer += geometryEngine.getMeshGradient(colors);
    if (dna.effects.includes('grid')) bgLayer += geometryEngine.getGrid(colors.primary);

    // CSS Variables for dynamic styling
    const css = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Lato:wght@300;400&family=Playfair+Display:ital,wght@0,600;1,600&family=Rajdhani:wght@600;700&family=Space+Grotesk:wght@500;700&display=swap');

        :root {
            --primary: ${colors.primary};
            --accent: ${colors.accent};
            --bg: ${colors.bg};
            --text: ${colors.text};
            --font-h: '${fonts.head}', sans-serif;
            --font-b: '${fonts.body}', sans-serif;
            --radius: ${dna.shape === 'rounded' ? '12px' : (dna.shape === 'pill' ? '50px' : '0px')};
        }

        body { 
            background: var(--bg); color: var(--text); font-family: var(--font-b); margin: 0; overflow-x: hidden; 
            transition: 0.5s; position: relative;
        }

        /* ANIMATIONS */
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes floatOrb { 0% { transform: translate(0,0); } 100% { transform: translate(20px, -20px); } }
        .reveal { opacity: 0; animation: fadeUp 0.8s forwards; }
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }

        nav { padding: 30px 8%; display: flex; justify-content: space-between; align-items: center; position: relative; z-index: 10; }
        .logo { font-family: var(--font-h); font-size: 24px; font-weight: 700; color: var(--text); }
        .nav-link { color: var(--text); padding: 10px 20px; text-decoration: none; opacity: 0.8; }
        .nav-btn { background: var(--primary); color: ${dna.theme === 'cyber' || dna.theme === 'luxury' || dna.theme === 'creative' ? '#000' : '#fff'}; padding: 12px 25px; border-radius: var(--radius); text-decoration: none; font-weight: 600; }

        .hero { 
            min-height: 80vh; display: flex; align-items: center; padding: 0 8%; position: relative; z-index: 5; 
            text-align: ${dna.layout === 'center' ? 'center' : 'left'};
            justify-content: ${dna.layout === 'center' ? 'center' : 'space-between'};
            flex-direction: ${dna.layout === 'center' ? 'column' : 'row'};
        }
        
        .hero-text { max-width: ${dna.layout === 'center' ? '800px' : '50%'}; }
        
        h1 { 
            font-family: var(--font-h); font-size: clamp(3rem, 5vw, 5rem); line-height: 1.1; margin-bottom: 20px;
            letter-spacing: ${dna.font === 'tech' ? '2px' : '-1px'};
        }
        
        .highlight { color: var(--primary); font-style: italic; }

        .hero-visual { 
            position: relative; width: 45%; display: flex; justify-content: center;
            ${dna.layout === 'center' ? 'width: 100%; margin-top: 50px;' : ''}
        }
        .hero-visual img { width: 100%; max-width: 500px; filter: drop-shadow(0 20px 50px rgba(0,0,0,0.3)); transform: rotate(-5deg); transition: 0.5s; }
        .hero-visual img:hover { transform: rotate(0deg) scale(1.05); }

        /* CARDS */
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; padding: 50px 8%; position: relative; z-index: 5; }
        .card { 
            background: rgba(255,255,255,0.03); backdrop-filter: blur(10px); 
            border: 1px solid rgba(255,255,255,0.1); padding: 30px; border-radius: var(--radius);
            transition: 0.3s;
        }
        .card:hover { transform: translateY(-10px); border-color: var(--primary); }
        .icon { font-size: 30px; color: var(--primary); margin-bottom: 20px; display: block; }
    `;

    const html = `
        <!DOCTYPE html>
        <html>
        <head><style>${css}</style></head>
        <body>
            ${bgLayer}
            
            <nav class="reveal">
                <div class="logo">${projectName}.</div>
                <div>
                    <a href="#" class="nav-link">Work</a>
                    <a href="#" class="nav-btn">Let's Talk</a>
                </div>
            </nav>

            <section class="hero">
                <div class="hero-text reveal delay-1">
                    <h1>We craft <span class="highlight">unique</span> digital experiences.</h1>
                    <p style="font-size: 1.2rem; opacity: 0.7; margin-bottom: 30px;">
                        Driven by data, powered by design. We help brands stand out in the noise.
                    </p>
                    <a href="#" class="nav-btn">Start Project</a>
                </div>
                
                <div class="hero-visual reveal delay-2">
                    ${dna.image ? `<img src="${dna.image}">` :
            `<div style="${geometryEngine.getOrb(colors.primary)} opacity:0.6;"></div>
                       <div style="${geometryEngine.getOrb(colors.accent)} right:0; bottom:0; animation-delay: -5s;"></div>`
        }
                </div>
            </section>

            <section class="grid reveal delay-3">
                <div class="card">
                    <span class="icon">✨</span>
                    <h3>Visual Identity</h3>
                    <p style="opacity:0.7">Crafting memorable brands that speak to your audience.</p>
                </div>
                <div class="card">
                    <span class="icon">🚀</span>
                    <h3>Growth Strategy</h3>
                    <p style="opacity:0.7">Data-driven campaigns to scale your business fast.</p>
                </div>
                <div class="card">
                    <span class="icon">💎</span>
                    <h3>Premium UI/UX</h3>
                    <p style="opacity:0.7">Interfaces that feel as good as they look.</p>
                </div>
            </section>
        </body>
        </html>
    `;

    doc.open();
    doc.write(html);
    doc.close();
}

window.onload = generateSite;
