// VISIONS ENGINE V3.0 : THE PRO ARCHITECT
// Features: Clip-path Geometry, Scanlines, Glass-Noise Textures, Hollow Typography.

const designSystem = {
    // Assets Library
    images: {
        gaming: 'assets/hero_gaming_cyborg.png',
        ai: 'assets/hero_ai_robot.png',
        gym: 'assets/hero_fitness_gym.png',
        coffee: 'assets/hero_coffee_cup.png'
    },
    // CSS FX Generators
    fx: {
        scanlines: `
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
            background-size: 100% 2px, 3px 100%;
            pointer-events: none; position: fixed; inset: 0; z-index: 999;
        `,
        glassNoise: `
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        `,
        neonGlow: (color) => `
            box-shadow: 0 0 10px ${color}, 0 0 20px ${color}40;
            border: 1px solid ${color};
        `
    }
};

function analyzePrompt(prompt) {
    const p = prompt.toLowerCase();
    let dna = {
        theme: 'clean',  // clean, cyber, luxury, organic
        palette: { bg: '#ffffff', text: '#000000', primary: '#333333' },
        font: 'Inter',
        shape: 'rounded', // rounded, sharp, cyber-cut
        fx: [],
        asset: null
    };

    // 1. Theme Logic
    if (p.includes('game') || p.includes('war') || p.includes('cod') || p.includes('duty') || p.includes('cyber')) {
        dna.theme = 'cyber';
        dna.palette = { bg: '#0b0b0b', text: '#e0e0e0', primary: '#f1c40f' }; // Yellow/Black ops vibes
        if (p.includes('neon')) dna.palette.primary = '#00f3ff'; // switch to cyan if neon asked
        dna.font = 'Rajdhani';
        dna.shape = 'cyber-cut'; // The Sci-Fi Cut Corner shape
        dna.fx.push('scanlines');
        dna.asset = designSystem.images.gaming;
    }
    else if (p.includes('luxury') || p.includes('gold') || p.includes('watch') || p.includes('billion')) {
        dna.theme = 'luxury';
        dna.palette = { bg: '#050505', text: '#ecf0f1', primary: '#d4af37' }; // Gold
        dna.font = 'Playfair Display';
        dna.shape = 'sharp';
        dna.fx.push('noise');
    }
    else if (p.includes('gym') || p.includes('fitness') || p.includes('sport')) {
        dna.theme = 'impact';
        dna.palette = { bg: '#000000', text: '#ffffff', primary: '#eb4d4b' }; // Red/Black
        dna.font = 'Space Grotesk';
        dna.shape = 'sharp'; // Skewed
        dna.asset = designSystem.images.gym;
        dna.fx.push('italic-headers');
    }
    else if (p.includes('nature') || p.includes('coffee') || p.includes('organic')) {
        dna.theme = 'organic';
        dna.palette = { bg: '#fdfbf7', text: '#2d3436', primary: '#27ae60' };
        if (p.includes('coffee')) dna.palette.primary = '#d35400';
        dna.font = 'Lato';
        dna.shape = 'rounded';
        dna.asset = designSystem.images.coffee;
    }

    return dna;
}

function generateSite() {
    const prompt = document.getElementById('aiPrompt').value || "Modern Website";
    const projectName = document.getElementById('projectName').value || "Brand";
    const dna = analyzePrompt(prompt);

    const frame = document.getElementById('previewFrame');
    const doc = frame.contentWindow.document;

    // Advanced CSS Construction
    const css = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Lato:wght@400;700&family=Playfair+Display:wght@400;700&family=Rajdhani:wght@600;700&family=Space+Grotesk:wght@500;700&display=swap');

        :root {
            --primary: ${dna.palette.primary};
            --bg: ${dna.palette.bg};
            --text: ${dna.palette.text};
            --font: '${dna.font}', sans-serif;
        }

        body { 
            background-color: var(--bg); 
            color: var(--text); 
            font-family: var(--font); 
            margin: 0; overflow-x: hidden;
        }

        /* FX LAYERS */
        ${dna.fx.includes('scanlines') ? `.scanlines { ${designSystem.fx.scanlines} }` : ''}

        nav {
            padding: 30px 10%; display: flex; justify-content: space-between; align-items: center;
            border-bottom: 1px solid ${dna.theme === 'clean' ? '#eee' : 'rgba(255,255,255,0.1)'};
            backdrop-filter: blur(10px); position: sticky; top: 0; z-index: 100;
        }
        .logo { font-size: 24px; font-weight: 800; letter-spacing: ${dna.theme === 'cyber' ? '2px' : '0'}; text-transform: uppercase; }

        .btn {
            background: var(--primary);
            color: ${dna.theme === 'organic' || dna.theme === 'clean' ? '#fff' : '#000'};
            padding: 15px 40px; font-weight: bold; text-decoration: none; text-transform: uppercase;
            display: inline-block; transition: 0.3s;
            clip-path: ${dna.shape === 'cyber-cut' ? 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' : (dna.shape === 'rounded' ? 'none' : 'none')};
            border-radius: ${dna.shape === 'rounded' ? '30px' : '0'};
            transform: ${dna.theme === 'impact' ? 'skew(-10deg)' : 'none'};
        }
        .btn:hover { filter: brightness(1.2); letter-spacing: 1px; }

        /* HERO SECTION */
        .hero {
            min-height: 85vh; display: flex; align-items: center; padding: 0 10%;
            position: relative;
        }
        .hero-content { flex: 1; z-index: 10; }
        .hero-visual { flex: 1; display: flex; justify-content: center; position: relative; z-index: 1; }
        
        h1 {
            font-size: clamp(3rem, 6vw, 6rem); line-height: 0.9; margin-bottom: 30px;
            text-transform: uppercase;
            ${dna.theme === 'impact' ? 'font-style: italic;' : ''}
        }
        
        /* HOLLOW TEXT EFFECT FOR CYBER */
        .hollow {
            -webkit-text-stroke: 1px var(--primary); color: transparent;
        }
        .highlight { color: var(--primary); }

        .hero-visual img {
            max-width: 120%; 
            filter: drop-shadow(0 0 50px ${dna.palette.primary}40);
            animation: float 5s ease-in-out infinite;
        }

        /* GRID/CARDS */
        .stats-grid {
            display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
            margin-top: 60px;
        }
        .stat-card {
            border: 1px solid ${dna.theme === 'clean' ? '#ddd' : 'rgba(255,255,255,0.2)'};
            padding: 20px;
            ${dna.shape === 'cyber-cut' ? 'clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px); background: rgba(255,255,255,0.03);' : ''} 
        }
        .stat-num { font-size: 3rem; font-weight: 800; color: var(--primary); display: block; }
        .stat-label { font-size: 0.9rem; letter-spacing: 1px; opacity: 0.7; }
        
        /* HUD ELEMENTS (Cyber Only) */
        .hud-line {
            position: absolute; height: 1px; background: var(--primary); opacity: 0.5;
            width: 100px;
        }

        @keyframes float { 0% { transform: translateY(0); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0); } }
    `;

    // Content Generation
    let title = "BUILD<br>THE FUTURE";
    if (dna.theme === 'cyber') title = `DOMINATE<br><span class="hollow">THE FIELD</span>`;
    if (dna.theme === 'luxury') title = `DEFINING<br><span class="highlight">LUXURY</span>`;
    if (dna.theme === 'organic') title = `FRESH<br><span class="highlight">NATURAL</span>`;

    // HUD Generation for Cyber
    const hud = dna.theme === 'cyber' ? `
        <div class="hud-line" style="top: 15vh; left: 5%;"></div>
        <div class="hud-line" style="bottom: 15vh; right: 5%;"></div>
        <div style="position:absolute; top:20vh; right:10%; font-family:monospace; color:var(--primary); opacity:0.6;">SYS.READY // V.3.0</div>
    ` : '';

    const html = `
        <!DOCTYPE html>
        <html>
        <head><style>${css}</style></head>
        <body>
            ${dna.fx.includes('scanlines') ? '<div class="scanlines"></div>' : ''}
            ${hud}

            <nav>
                <div class="logo">${projectName}</div>
                <a href="#" class="btn">Login</a>
            </nav>

            <section class="hero">
                <div class="hero-content">
                    <h1>${title}</h1>
                    <p style="font-size: 1.2rem; opacity: 0.8; max-width: 500px; margin-bottom: 40px; border-left: 2px solid var(--primary); padding-left: 20px;">
                        The next generation platform designed for those who demand excellence. Generated via Design DNA.
                    </p>
                    <a href="#" class="btn">GET STARTED</a>

                    <div class="stats-grid">
                        <div class="stat-card">
                            <span class="stat-num">5M+</span>
                            <span class="stat-label">USERS</span>
                        </div>
                        <div class="stat-card">
                            <span class="stat-num">0.1s</span>
                            <span class="stat-label">LATENCY</span>
                        </div>
                    </div>
                </div>

                <div class="hero-visual">
                    ${dna.asset ? `<img src="${dna.asset}">` : ''}
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
