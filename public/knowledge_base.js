
// VISIONS AI - PRO DESIGN KNOWLEDGE BASE
// Curated High-Quality Design Patterns (Reference: Awwwards, Dribbble, Linear, Stripe)

const DesignKnowledge = {
    // 1. MODERN SAAS (Stripe/Linear Style)
    'saas': {
        vibe: 'saas-clean',
        palette: { bg: '#0b0c15', primary: '#5e6ad2', secondary: '#ffffff', text: '#e0e0e0', accent: '#7f8cf2', surface: 'rgba(255,255,255,0.03)' },
        typography: { head: 'Inter', body: 'Inter', googleFonts: 'family=Inter:wght@400;500;600;800&display=swap' },
        ui: { rounded: '8px', border: '1px solid rgba(255,255,255,0.08)', shadow: '0 20px 80px rgba(94, 106, 210, 0.15)', glass: true },
        tech: { framework: 'vanilla', animations: 'fade-slide', effects: ['gradient-mesh', 'glow-text'] },
        structure_hint: "Use large typography, subtle gradients, bento-grid layout for features, and glassmorphism cards."
    },

    // 2. LUXURY AESTHETIC (Rolex/Gucci Style)
    'luxury': {
        vibe: 'ecommerce-modern',
        palette: { bg: '#080808', primary: '#D4AF37', secondary: '#f5f5f5', text: '#f5f5f5', accent: '#D4AF37', surface: '#111111' },
        typography: { head: 'Playfair Display', body: 'Lato', googleFonts: 'family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400&display=swap' },
        ui: { rounded: '0px', border: '1px solid rgba(212, 175, 55, 0.2)', shadow: 'none', glass: false },
        tech: { framework: 'vanilla', animations: 'parallax', effects: ['reveal-scroll'] },
        structure_hint: "Minimalist layout, lots of whitespace, serif headings, high-contrast imagery, elegant thin lines."
    },

    // 3. CYBERPUNK / GAMING (Rage/Valorant Style)
    'gaming': {
        vibe: 'gaming-action',
        palette: { bg: '#050505', primary: '#ff4655', secondary: '#0f1923', text: '#ece8e1', accent: '#ff4655', surface: 'rgba(255, 70, 85, 0.1)' },
        typography: { head: 'Teko', body: 'Rajdhani', googleFonts: 'family=Teko:wght@600;700&family=Rajdhani:wght@500;700&display=swap' },
        ui: { rounded: '2px', border: '1px solid #ff4655', shadow: '5px 5px 0px rgba(255, 70, 85, 0.4)', glass: false },
        tech: { framework: 'vanilla', animations: 'glitch', effects: ['scanlines', 'vhs-noise'] },
        structure_hint: "Aggressive geometry, slanted dividers, glitch effects on hover, bold uppercase typography."
    },

    // 4. CREATIVE PORTFOLIO (Brutalism/Neo-Brutalism)
    'creative': {
        vibe: 'creative-portfolio',
        palette: { bg: '#f0f0f0', primary: '#000000', secondary: '#ffcc00', text: '#000000', accent: '#ff4444', surface: '#ffffff' },
        typography: { head: 'Space Grotesk', body: 'DM Sans', googleFonts: 'family=Space+Grotesk:wght@700&family=DM+Sans:wght@400;500&display=swap' },
        ui: { rounded: '12px', border: '3px solid #000000', shadow: '8px 8px 0px #000000', glass: false },
        tech: { framework: 'vanilla', animations: 'bounce', effects: ['brutalist-grid'] },
        structure_hint: "Bold borders, high contrast shadows, oversized typography, playful interactions, raw aesthetic."
    },

    // 5. AI / FUTURISTIC (OpenAI/Anthropic Style)
    'future': {
        vibe: 'ai-neon',
        palette: { bg: '#000000', primary: '#10a37f', secondary: '#ffffff', text: '#ffffff', accent: '#a1a1aa', surface: 'rgba(255,255,255,0.05)' },
        typography: { head: 'Sora', body: 'Inter', googleFonts: 'family=Sora:wght@600;800&family=Inter:wght@400;500&display=swap' },
        ui: { rounded: '24px', border: '1px solid rgba(255,255,255,0.1)', shadow: '0 0 40px rgba(16, 163, 127, 0.2)', glass: true },
        tech: { framework: 'vanilla', animations: 'float-glow', effects: ['glassmorphism', 'aurora-gradient'] },
        structure_hint: "Clean typography, subtle aurora gradients in background, frosted glass cards, perfect centering."
    },

    // 6. FITNESS / SPORT (Nike/Gymshark Style)
    'fitness': {
        vibe: 'fitness-energy',
        palette: { bg: '#111111', primary: '#ff5400', secondary: '#ffffff', text: '#ffffff', accent: '#ff5400', surface: '#1e1e1e' },
        typography: { head: 'Oswald', body: 'Roboto', googleFonts: 'family=Oswald:wght@700&display=swap&family=Roboto:wght@400;500&display=swap' },
        ui: { rounded: '4px', border: 'none', shadow: '0 10px 40px rgba(255, 84, 0, 0.3)', glass: false },
        tech: { framework: 'vanilla', animations: 'fade-up', effects: ['slant-sections'] },
        structure_hint: "High energy, bold uppercase typography, dark background with neon orange accents, dynamic angles."
    }
};

window.getDesignContext = (prompt) => {
    const p = prompt.toLowerCase();
    if (p.includes('game') || p.includes('gaming') || p.includes('play')) return DesignKnowledge.gaming;
    if (p.includes('gym') || p.includes('fit') || p.includes('workout') || p.includes('sport')) return DesignKnowledge.fitness;
    if (p.includes('lux') || p.includes('fashion')) return DesignKnowledge.luxury;
    if (p.includes('art') || p.includes('portfolio') || p.includes('fun')) return DesignKnowledge.creative;
    if (p.includes('ai') || p.includes('robot') || p.includes('tech')) return DesignKnowledge.future;
    return DesignKnowledge.saas; // Default to high-end SaaS
};
