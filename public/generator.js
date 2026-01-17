/**
 * VISIONS AI - INTELLIGENT LANDING PAGE GENERATOR
 * AI-Powered Architecture with Deep Learning Decision Making
 */

// --- MODULE 1: THE BRAIN (Advanced AI Intelligence) ---
const AI_Brain = {
    // Enhanced presets with tech stack recommendations
    presets: {
        'lol-fantasy': {
            keywords: ['league', 'fantasy', 'rpg', 'magic', 'mystic', 'gold', 'cinematic', 'game', 'medieval'],
            vibe: 'fantasy-cinematic',
            palette: { bg: '#050a14', primary: '#c8aa6e', secondary: '#0ac8b9', text: '#f0f0f0', accent: '#cdbe91', surface: 'rgba(5, 10, 20, 0.8)' },
            typography: { head: 'Cinzel', body: 'Roboto', googleFonts: 'family=Cinzel:wght@700;900&family=Roboto:wght@300;400;500' },
            ui: { rounded: '2px', border: '1px solid #c8aa6e', shadow: '0 0 20px rgba(200, 170, 110, 0.2)', glass: false },
            tech: { framework: 'vanilla', animations: 'parallax', effects: ['particle-bg', 'glow-text'] }
        },
        'saas-modern': {
            keywords: ['business', 'saas', 'startup', 'clean', 'corporate', 'blue', 'tech', 'software', 'app', 'platform'],
            vibe: 'saas-clean',
            palette: { bg: '#ffffff', primary: '#3b82f6', secondary: '#1e40af', text: '#1f2937', accent: '#60a5fa', surface: '#f9fafb' },
            typography: { head: 'Inter', body: 'Inter', googleFonts: 'family=Inter:wght@400;600;800' },
            ui: { rounded: '12px', border: '1px solid #e5e7eb', shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', glass: false },
            tech: { framework: 'vanilla', animations: 'fade-slide', effects: ['gradient-bg', 'smooth-scroll'] }
        },
        'gaming-action': {
            keywords: ['shoot', 'fps', 'war', 'rage', 'gritty', 'red', 'action', 'esports', 'tournament', 'battle'],
            vibe: 'gaming-action',
            palette: { bg: '#0a0a0a', primary: '#ef4444', secondary: '#000000', text: '#ffffff', accent: '#fee2e2', surface: '#171717' },
            typography: { head: 'Teko', body: 'Rajdhani', googleFonts: 'family=Teko:wght@600;700&family=Rajdhani:wght@400;600' },
            ui: { rounded: '0px', border: '2px solid #ef4444', shadow: '10px 10px 0px rgba(239, 68, 68, 0.5)', glass: false },
            tech: { framework: 'vanilla', animations: 'glitch', effects: ['scanlines', 'vhs-noise', 'hard-shadows'] }
        },
        'ai-neon': {
            keywords: ['ai', 'robot', 'future', 'neon', 'purple', 'glow', 'cyber', 'tech', 'innovation', 'neural'],
            vibe: 'ai-neon',
            palette: { bg: '#030014', primary: '#a855f7', secondary: '#3b82f6', text: '#ffffff', accent: '#d8b4fe', surface: 'rgba(255, 255, 255, 0.05)' },
            typography: { head: 'Outfit', body: 'Space Grotesk', googleFonts: 'family=Outfit:wght@700;900&family=Space+Grotesk:wght@300;500' },
            ui: { rounded: '20px', border: '1px solid rgba(255,255,255,0.1)', shadow: '0 0 30px rgba(168, 85, 247, 0.4)', glass: true },
            tech: { framework: 'vanilla', animations: 'float-glow', effects: ['glassmorphism', 'gradient-mesh', 'neon-glow'] }
        },
        'ecommerce': {
            keywords: ['shop', 'store', 'ecommerce', 'buy', 'product', 'fashion', 'clothing', 'retail', 'cart'],
            vibe: 'ecommerce-modern',
            palette: { bg: '#fafafa', primary: '#000000', secondary: '#ffffff', text: '#1a1a1a', accent: '#ff6b6b', surface: '#ffffff' },
            typography: { head: 'Playfair Display', body: 'Lato', googleFonts: 'family=Playfair+Display:wght@700;900&family=Lato:wght@300;400;700' },
            ui: { rounded: '0px', border: '1px solid #e0e0e0', shadow: '0 2px 8px rgba(0,0,0,0.08)', glass: false },
            tech: { framework: 'vanilla', animations: 'zoom-fade', effects: ['minimal-grid', 'product-hover'] }
        },
        'portfolio': {
            keywords: ['portfolio', 'creative', 'designer', 'artist', 'showcase', 'personal', 'work'],
            vibe: 'creative-portfolio',
            palette: { bg: '#0f0f0f', primary: '#ffffff', secondary: '#ffd700', text: '#ffffff', accent: '#ffd700', surface: '#1a1a1a' },
            typography: { head: 'Montserrat', body: 'Poppins', googleFonts: 'family=Montserrat:wght@700;900&family=Poppins:wght@300;400;600' },
            ui: { rounded: '8px', border: '1px solid #333', shadow: '0 10px 30px rgba(0,0,0,0.5)', glass: false },
            tech: { framework: 'vanilla', animations: 'reveal-scroll', effects: ['dark-mode', 'image-parallax'] }
        },
        'fitness-energy': {
            keywords: ['gym', 'fitness', 'workout', 'sport', 'health', 'train', 'muscle', 'run', 'active', 'yoga'],
            vibe: 'fitness-energy',
            palette: { bg: '#111111', primary: '#ff5400', secondary: '#ffffff', text: '#ffffff', accent: '#ff5400', surface: '#1e1e1e' },
            typography: { head: 'Oswald', body: 'Roboto', googleFonts: 'family=Oswald:wght@700&family=Roboto:wght@400;500;700' },
            ui: { rounded: '4px', border: 'none', shadow: '0 10px 40px rgba(255, 84, 0, 0.3)', glass: false },
            tech: { framework: 'vanilla', animations: 'fade-up', effects: ['slant-sections'] }
        },
        'glass': {
            keywords: ['glass', 'glassmorphism', 'business', 'agency', 'modern', 'clean', 'blob', 'translucent'],
            vibe: 'glass-modern',
            palette: { bg: '#f0f2f5', primary: '#4f46e5', secondary: '#ffffff', text: '#1e293b', accent: '#818cf8', surface: 'rgba(255, 255, 255, 0.4)' },
            typography: { head: 'Poppins', body: 'Inter', googleFonts: 'family=Poppins:wght@600;700&family=Inter:wght@400;500' },
            ui: { rounded: '24px', border: '1px solid rgba(255, 255, 255, 0.6)', shadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)', glass: true },
            tech: { framework: 'vanilla', animations: 'float', effects: ['floating-blobs', 'glass-card-shine'] }
        }
    },

    // Intelligent Analysis with Context Understanding
    analyze: async (prompt, apiKey) => {
        // --- 1. ENTERPRISE SERVER AI ---
        // --- 1. ENTERPRISE SERVER AI ---
        // Always try Server AI first (it will use .env key if user key is empty)
        if (true) {
            try {
                console.log("☁️ Connecting to Enterprise AI Gateway...");

                // Determine provider based on user input, or default to gemini for server
                let provider = 'gemini';
                if (apiKey && apiKey.startsWith('sk-')) provider = 'openai';

                const response = await fetch(`${API_URL}/ai/generate`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ prompt, provider, apiKey })
                });

                const data = await response.json();
                if (!response.ok || !data.success) throw new Error(data.error || 'AI Gateway Failure');

                console.log(`✅ Server Response: ${data.data.mode}`);
                return data.data;

            } catch (e) {
                console.error("AI Gateway Failed:", e);
                showToast(`⚠️ Server AI Error: ${e.message}. Falling back to offline logic.`, 'error');
            }
        }

        // --- 2. FALLBACK OFFLINE INTELLIGENCE ---

        console.warn("⚠️ No API Key / Server Fail - Using Offline Brain");

        const p = prompt.toLowerCase();

        // Step 1: Theme Detection with Scoring
        let bestMatch = 'saas-modern';
        let maxScore = 0;

        for (const [key, preset] of Object.entries(AI_Brain.presets)) {
            let score = 0;
            preset.keywords.forEach(k => { if (p.includes(k)) score += 2; });
            if (score > maxScore) { maxScore = score; bestMatch = key; }
        }

        const selectedPreset = AI_Brain.presets[bestMatch];

        // Step 2: Intelligent Content Generation based on prompt
        const words = p.split(' ').filter(w => w.length > 3);
        const mainKeywords = words.slice(0, 4).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

        // Step 3: Smart Section Detection
        const needsPricing = p.includes('price') || p.includes('plan') || p.includes('subscription') || p.includes('saas');
        const needsTestimonials = p.includes('review') || p.includes('customer') || p.includes('testimonial') || !p.includes('minimal');
        const needsGallery = p.includes('portfolio') || p.includes('showcase') || p.includes('gallery');
        const needsCTA = true; // Always

        // Step 4: Generate Contextual Content
        const brandName = words[0] ? words[0].charAt(0).toUpperCase() + words[0].slice(1) : 'VISION';

        return {
            ...selectedPreset,
            content: {
                brand: brandName.toUpperCase(),
                hero: {
                    headline: AI_Brain.generateHeadline(p, selectedPreset.vibe),
                    subhead: AI_Brain.generateSubhead(p, selectedPreset.vibe),
                    cta: AI_Brain.generateCTA(p, selectedPreset.vibe),
                    ctaSecondary: 'Learn More'
                },
                features: AI_Brain.generateFeatures(p, selectedPreset.vibe),
                testimonials: AI_Brain.generateTestimonials(brandName),
                pricing: needsPricing ? AI_Brain.generatePricing(p) : null,
                gallery: needsGallery ? AI_Brain.generateGallery() : null,
                footer: {
                    tagline: AI_Brain.generateTagline(p),
                    links: {
                        product: ['Features', 'Pricing', 'Integrations', 'FAQ'],
                        company: ['About', 'Blog', 'Careers', 'Press'],
                        legal: ['Privacy', 'Terms', 'Security', 'Cookies']
                    },
                    social: ['twitter', 'linkedin', 'github', 'youtube']
                }
            },
            sections: {
                hero: true,
                features: true,
                testimonials: needsTestimonials,
                pricing: needsPricing,
                gallery: needsGallery,
                cta: needsCTA,
                footer: true
            },
            imagePrompts: {
                background: `cinematic background for ${brandName} ${selectedPreset.vibe.replace('-', ' ')}, high quality, 4k, ${selectedPreset.keywords.slice(0, 3).join(', ')}`,
                hero: `hero image for ${brandName}, ${selectedPreset.vibe.replace('-', ' ')} style, professional photography, centered, 8k`
            },
            layout: (() => {
                const layouts = ['classic-centered', 'modern-split', 'immersive-minimal'];
                // bias based on vibe
                if (selectedPreset.vibe === 'fantasy-cinematic' || selectedPreset.vibe === 'creative-portfolio') return Math.random() > 0.3 ? 'immersive-minimal' : 'modern-split';
                if (selectedPreset.vibe === 'saas-clean') return Math.random() > 0.5 ? 'modern-split' : 'classic-centered';
                return layouts[Math.floor(Math.random() * layouts.length)];
            })(),
            mode: 'OFFLINE_AI_INTELLIGENCE'
        };
    },

    // Smart Content Generators
    generateHeadline: (prompt, vibe) => {
        const templates = {
            'fantasy-cinematic': ['ENTER THE REALM OF', 'LEGENDARY ADVENTURES AWAIT', 'FORGE YOUR DESTINY'],
            'saas-clean': ['TRANSFORM YOUR WORKFLOW', 'SCALE YOUR BUSINESS', 'WORK SMARTER, NOT HARDER'],
            'gaming-action': ['DOMINATE THE BATTLEFIELD', 'UNLEASH YOUR POWER', 'VICTORY AWAITS'],
            'ai-neon': ['THE FUTURE IS NOW', 'NEXT-GEN INTELLIGENCE', 'POWERED BY AI'],
            'ecommerce-modern': ['DISCOVER YOUR STYLE', 'SHOP THE COLLECTION', 'ELEVATE YOUR WARDROBE'],
            'ecommerce-modern': ['DISCOVER YOUR STYLE', 'SHOP THE COLLECTION', 'ELEVATE YOUR WARDROBE'],
            'creative-portfolio': ['CREATIVE EXCELLENCE', 'DESIGN THAT INSPIRES', 'MY WORK, MY STORY'],
            'fitness-energy': ['UNLEASH YOUR POTENTIAL', 'TRAIN LIKE A PRO', 'BUILD YOUR LEGACY']
        };

        const words = prompt.split(' ').slice(0, 3).map(w => w.toUpperCase()).join(' ');
        return templates[vibe] ? templates[vibe][0] + ' ' + words : words;
    },

    generateSubhead: (prompt, vibe) => {
        const templates = {
            'fantasy-cinematic': 'Embark on an epic journey through mystical lands. Your legend begins here.',
            'saas-clean': 'Streamline operations, boost productivity, and scale effortlessly with our platform.',
            'gaming-action': 'Join millions of players worldwide. Compete, conquer, and claim your throne.',
            'ai-neon': 'Harness the power of artificial intelligence to transform your business.',
            'ecommerce-modern': 'Premium quality, curated collections, delivered to your doorstep.',
            'ecommerce-modern': 'Premium quality, curated collections, delivered to your doorstep.',
            'creative-portfolio': 'Crafting digital experiences that captivate and inspire audiences.',
            'fitness-energy': 'Transform your body and mind with world-class training and state-of-the-art facilities.'
        };
        return templates[vibe] || 'Experience innovation like never before. Built for excellence.';
    },

    generateCTA: (prompt, vibe) => {
        if (prompt.includes('shop') || prompt.includes('buy')) return 'Shop Now';
        if (prompt.includes('game') || prompt.includes('play')) return 'Play Now';
        if (prompt.includes('portfolio') || prompt.includes('work')) return 'View Work';
        return 'Get Started Free';
    },

    generateFeatures: (prompt, vibe) => {
        const featureSets = {
            'fantasy-cinematic': [
                { icon: 'dragon', title: 'Epic Quests', desc: 'Embark on legendary adventures across mystical realms.' },
                { icon: 'shield', title: 'Powerful Abilities', desc: 'Master unique skills and devastating combat techniques.' },
                { icon: 'gem', title: 'Rare Treasures', desc: 'Discover legendary loot and ancient artifacts.' },
                { icon: 'users', title: 'Guild System', desc: 'Join forces with allies to conquer formidable foes.' }
            ],
            'saas-clean': [
                { icon: 'rocket', title: 'Lightning Fast', desc: 'Optimized performance with sub-second response times.' },
                { icon: 'shield-halved', title: 'Enterprise Security', desc: 'Bank-level encryption and compliance standards.' },
                { icon: 'chart-line', title: 'Advanced Analytics', desc: 'Real-time insights and actionable business intelligence.' },
                { icon: 'headset', title: '24/7 Support', desc: 'Expert assistance whenever you need it, guaranteed.' }
            ],
            'gaming-action': [
                { icon: 'crosshairs', title: 'Precision Combat', desc: 'Advanced mechanics for competitive gameplay.' },
                { icon: 'trophy', title: 'Ranked Matches', desc: 'Climb the leaderboards and prove your skills.' },
                { icon: 'gamepad', title: 'Cross-Platform', desc: 'Play anywhere, on any device seamlessly.' },
                { icon: 'bolt', title: 'Real-time Action', desc: 'Fast-paced battles with zero lag guaranteed.' }
            ],
            'ai-neon': [
                { icon: 'brain', title: 'Neural Networks', desc: 'Advanced AI models trained on billions of data points.' },
                { icon: 'microchip', title: 'Edge Computing', desc: 'Process data locally for instant results.' },
                { icon: 'robot', title: 'Automation', desc: 'Intelligent workflows that adapt and learn.' },
                { icon: 'lock', title: 'Privacy First', desc: 'Your data stays secure with end-to-end encryption.' }
            ],
            'ecommerce-modern': [
                { icon: 'truck-fast', title: 'Free Shipping', desc: 'Fast delivery on all orders over $50.' },
                { icon: 'rotate-left', title: 'Easy Returns', desc: '30-day hassle-free return policy.' },
                { icon: 'credit-card', title: 'Secure Checkout', desc: 'Multiple payment options, fully encrypted.' },
                { icon: 'star', title: 'Premium Quality', desc: 'Handpicked products from top brands.' }
            ],
            'creative-portfolio': [
                { icon: 'palette', title: 'Brand Identity', desc: 'Creating memorable visual identities that stand out.' },
                { icon: 'code', title: 'Web Development', desc: 'Building responsive, high-performance websites.' },
                { icon: 'mobile', title: 'UI/UX Design', desc: 'Crafting intuitive user experiences.' },
                { icon: 'video', title: 'Motion Graphics', desc: 'Bringing stories to life through animation.' }
            ],
            'fitness-energy': [
                { icon: 'dumbbell', title: 'State-of-the-art Gym', desc: 'Premium equipment for every muscle group.' },
                { icon: 'heart-pulse', title: 'Personal Training', desc: 'Expert coaches to guide your fitness journey.' },
                { icon: 'carrot', title: 'Nutrition Plans', desc: 'Customized diet plans to fuel your performance.' },
                { icon: 'people-group', title: 'Group Classes', desc: 'High-energy classes to keep you motivated.' }
            ]
        };
        return featureSets[vibe] || featureSets['saas-clean'];
    },

    generateTestimonials: (brand) => [
        { name: 'Sarah Chen', role: 'CEO, TechVentures', text: `${brand} transformed our entire operation. Absolutely game-changing!`, rating: 5 },
        { name: 'Marcus Rodriguez', role: 'Product Lead', text: 'Best investment we\'ve made this year. Highly recommended!', rating: 5 },
        { name: 'Emily Watson', role: 'Founder, StartupX', text: 'Incredible results in just weeks. The team loves it!', rating: 5 }
    ],

    generatePricing: (prompt) => [
        { name: 'Starter', price: '$29', period: '/month', features: ['5 Projects', '10GB Storage', 'Basic Support', 'Core Features'], highlight: false },
        { name: 'Pro', price: '$79', period: '/month', features: ['Unlimited Projects', '100GB Storage', 'Priority Support', 'Advanced Features', 'API Access'], highlight: true },
        { name: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited Everything', 'Dedicated Manager', 'Custom Integration', 'SLA Guarantee'], highlight: false }
    ],

    generateGallery: () => [
        { title: 'Project Alpha', category: 'Web Design' },
        { title: 'Brand Identity', category: 'Branding' },
        { title: 'Mobile App', category: 'UI/UX' },
        { title: 'Marketing Campaign', category: 'Digital' }
    ],

    generateTagline: (prompt) => {
        if (prompt.includes('game')) return 'Level up your gaming experience.';
        if (prompt.includes('shop')) return 'Where style meets quality.';
        if (prompt.includes('ai')) return 'Building the future with intelligence.';
        return 'Innovation delivered, excellence guaranteed.';
    },

    // Real AI Implementation (Universal: OpenAI + Gemini)
    fetchRealAI: async (prompt, key) => {
        // --- CONTEXTUAL DESIGN INTELLIGENCE ---
        let designGuidance = "";
        try {
            if (typeof window.getDesignContext === 'function') {
                const ctx = window.getDesignContext(prompt);
                if (ctx) {
                    designGuidance = `
                        IMPORTANT - USE THIS DESIGN REFERENCE:
                        - Style Vibe: ${ctx.vibe}
                        - Visual Context: ${ctx.structure_hint}
                        - Color Palette: ${JSON.stringify(ctx.palette)}
                        - Typography: ${JSON.stringify(ctx.typography)}
                        - UI Definition: ${JSON.stringify(ctx.ui)}
                        
                        Use these specific design values in your JSON response to ensure high-quality aesthetics.
                     `;
                }
            }
        } catch (e) { console.warn("Design Context Error:", e); }

        // 1. Check for OpenAI Key (starts with 'sk-')
        if (key.trim().startsWith('sk-')) {
            console.log('🧠 Detected OpenAI Key. Switching to GPT-4o...');
            try {
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${key}`
                    },
                    body: JSON.stringify({
                        model: "gpt-4o",
                        messages: [
                            { role: "system", content: "You are a UI/UX expert. Generate a JSON design spec for a landing page. Output JSON only. " + designGuidance },
                            {
                                role: "user", content: `Analyze this request: "${prompt}". 
                            
                            RETURN JSON with this structure:
                            {
                                "vibe": "string",
                                "palette": { "bg": "hex", "primary": "hex", "secondary": "hex", "text": "hex", "accent": "hex", "surface": "hex" },
                                "typography": { "head": "Google Font", "body": "Google Font", "googleFonts": "family=Font:wght@weights&display=swap" },
                                "ui": { "rounded": "px", "border": "css", "shadow": "css", "glass": boolean },
                                "tech": { "framework": "vanilla", "animations": "fade-slide", "effects": ["effect"] },
                                "content": {
                                    "brand": "Brand",
                                    "hero": { "headline": "Head", "subhead": "Sub", "cta": "Btn", "ctaSecondary": "Btn2" },
                                    "features": [{ "icon": "star", "title": "Feat", "desc": "Desc" }],
                                    "testimonials": [{ "name": "Name", "role": "Role", "text": "Quote", "rating": 5 }],
                                    "pricing": [{ "name": "Plan", "price": "$10", "period": "/mo", "features": ["f1"], "highlight": false }],
                                    "footer": { "tagline": "Tag", "links": { "product": [], "company": [], "legal": [] }, "social": ["twitter"] }
                                },
                                "sections": { "hero": true, "features": true, "testimonials": true, "pricing": true, "gallery": false, "cta": true, "footer": true },
                                "imagePrompts": { "background": "midjourney prompt", "hero": "midjourney prompt" }
                            }` }
                        ],
                        response_format: { type: "json_object" }
                    })
                });

                const data = await response.json();
                if (!response.ok) throw new Error(data.error?.message || 'OpenAI API Failed');

                const parsed = JSON.parse(data.choices[0].message.content);
                parsed.mode = 'ONLINE_GPT_4o';
                return parsed;
            } catch (e) {
                throw new Error(`OpenAI Failed: ${e.message}`);
            }
        }

        // 2. Default: Google Gemini (Looping Fallback)
        const models = ['gemini-1.5-flash', 'gemini-1.5-flash-001', 'gemini-1.5-pro', 'gemini-pro', 'gemini-1.0-pro'];
        let lastError = null;

        const systemInstruction = `
        You are a SENIOR FULL-STACK DEVELOPER & UI/UX ARCHITECT.
        ${designGuidance}
        Analyze the user's landing page request and generate a COMPLETE, PROFESSIONAL design specification.
        RETURN ONLY VALID JSON (no markdown).
        {
            "vibe": "string (saas-clean | fantasy-cinematic | gaming-action | ai-neon | ecommerce-modern | creative-portfolio)",
            "layout": "string (classic-centered | modern-split | immersive-minimal)",
            "palette": { "bg": "hex", "primary": "hex", "secondary": "hex", "text": "hex", "accent": "hex", "surface": "hex" },
            "typography": { "head": "Google Font", "body": "Google Font", "googleFonts": "family=Font:wght@weights&display=swap" },
            "ui": { "rounded": "px", "border": "css", "shadow": "css", "glass": boolean },
            "tech": { "framework": "vanilla", "animations": "fade-slide", "effects": ["effect"] },
            "content": {
                "brand": "Brand",
                "hero": { "headline": "Head", "subhead": "Sub", "cta": "Btn", "ctaSecondary": "Btn2", "alignment": "left | center" },
                "features": [{ "icon": "star", "title": "Feat", "desc": "Desc" }],
                "testimonials": [{ "name": "Name", "role": "Role", "text": "Quote", "rating": 5 }],
                "pricing": [{ "name": "Plan", "price": "$10", "period": "/mo", "features": ["f1"], "highlight": false }],
                "footer": { "tagline": "Tag", "links": { "product": [], "company": [], "legal": [] }, "social": ["twitter"] }
            },
            "sections": { "hero": true, "features": true, "testimonials": true, "pricing": true, "gallery": false, "cta": true, "footer": true },
            "imagePrompts": { "background": "midjourney prompt", "hero": "midjourney prompt" }
        }`;

        for (const model of models) {
            try {
                console.log(`🧠 Trying AI Model: ${model}...`);
                const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;

                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{ text: systemInstruction + "\n\nUser Request: " + prompt }]
                        }]
                    })
                });

                const data = await response.json();
                if (!response.ok) throw new Error(data.error?.message || `Model ${model} failed`);
                if (!data.candidates || !data.candidates[0]) throw new Error('No response');

                const rawText = data.candidates[0].content.parts[0].text;
                const jsonStr = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
                const parsed = JSON.parse(jsonStr);
                parsed.mode = `ONLINE_GEMINI_AI (${model})`;

                console.log(`✅ Success with model: ${model}`);
                return parsed;

            } catch (e) {
                console.warn(`⚠️ Model ${model} failed:`, e.message);
                lastError = e;
            }
        }
        throw lastError || new Error("All Gemini models failed. API Key might be invalid.");
    }
};

// --- MODULE 2: THE ARTIST (Visual Asset Generator) ---
const AI_Artist = {
    generate: (spec) => {
        const baseUrl = "https://gen.pollinations.ai/image/";
        const seed = Math.floor(Math.random() * 10000);
        const params = `?width=1920&height=1080&nologo=true&seed=${seed}&model=flux`; // Creating unique seed per session

        // 1. Use LLM-generated prompts if available (Most Intelligent)
        if (spec.imagePrompts && spec.imagePrompts.background && spec.imagePrompts.hero) {
            console.log("🎨 Using AI-Generated Image Prompts");
            return {
                background: baseUrl + encodeURIComponent(spec.imagePrompts.background) + params,
                hero: baseUrl + encodeURIComponent(spec.imagePrompts.hero) + params
            };
        }

        // 2. Fallback: Construct Context-Aware Prompts from Content (Better than static)
        // If we have a headline, use it to guide the image
        if (spec.content && spec.content.hero) {
            const context = spec.content.hero.headline;
            const vibe = spec.vibe.replace('-', ' ');

            const dynamicBg = `cinematic background for ${context}, ${vibe} style, high quality, 4k`;
            const dynamicHero = `hero image for ${context}, ${vibe} style, professional photography, centered, 8k`;

            console.log("🎨 Using Context-Aware Dynamic Prompts");
            return {
                background: baseUrl + encodeURIComponent(dynamicBg) + params,
                hero: baseUrl + encodeURIComponent(dynamicHero) + params
            };
        }

        // 3. Last Resort: Static Presets (Legacy)
        let bgPrompt = "";
        let heroPrompt = "";

        const promptMap = {
            'fantasy-cinematic': {
                bg: "dark mythic fantasy castle ruins, cinematic lighting, atmospheric fog, epic landscape, 8k",
                hero: "legendary fantasy warrior hero, league of legends style, dynamic pose, detailed armor, magical aura, 8k"
            },
            'saas-clean': {
                bg: "minimal clean abstract geometric shapes, soft blue gradient, corporate background, 8k",
                hero: "3d isometric illustration people working laptops, modern vector art, clean professional"
            },
            'gaming-action': {
                bg: "gritty concrete wall red neon lights, dark moody atmosphere, apocalyptic texture",
                hero: "futuristic cyberpunk soldier heavy weaponry, rage 2 style, intense action pose, 3d render"
            },
            'ai-neon': {
                bg: "dark abstract cyberspace purple neon grid lines, deep depth of field, digital bokeh",
                hero: "advanced futuristic robot AI, glossy white illuminated purple details, 3d octane render"
            },
            'ecommerce-modern': {
                bg: "minimal white studio background, soft shadows, clean product photography setup",
                hero: "elegant fashion model modern clothing, studio lighting, professional photography"
            },
            'creative-portfolio': {
                bg: "dark minimalist abstract gradient, modern design background, 8k",
                hero: "creative workspace setup, macbook, design tools, modern aesthetic, professional photography"
            },
            'fitness-energy': {
                bg: "dark gym atmosphere, weights, smoke, dramatic lighting, orange glow, 8k",
                hero: "fitness athlete working out, dynamic action shot, gym equipment, high contrast, cinematic lighting"
            },
            'glass-modern': {
                bg: "abstract colorful liquid gradient blobs, soft pastel colors, frosted glass effect background, 4k",
                hero: "futuristic 3d abstract glass shapes, floating elements, subsurface scattering, iridescent colors, 8k"
            }
        };

        const prompts = promptMap[spec.vibe] || {
            bg: `modern ${spec.vibe.replace('-', ' ')} background, high quality, 4k`,
            hero: `${spec.content.hero.headline} related visual, professional photography, high quality, 8k`
        };

        return {
            background: baseUrl + encodeURIComponent(prompts.bg) + params,
            hero: baseUrl + encodeURIComponent(prompts.hero) + params
        };
    }
};

// --- MODULE 3: THE BUILDER (Professional Code Generator) ---
const AI_Builder = {
    construct: (specs, images, options) => {
        const fonts = specs.typography.googleFonts;
        const headFont = specs.typography.head;
        const bodyFont = specs.typography.body;

        // Advanced CSS with Tech-Specific Effects
        const css = `
            @import url('https://fonts.googleapis.com/css2?${fonts}&display=swap');
            
            :root {
                --primary: ${specs.palette.primary};
                --secondary: ${specs.palette.secondary};
                --bg: ${specs.palette.bg};
                --text: ${specs.palette.text};
                --accent: ${specs.palette.accent};
                --surface: ${specs.palette.surface};
                --rounded: ${specs.ui.rounded};
            }

            * { box-sizing: border-box; margin: 0; padding: 0; }
            
            html { scroll-behavior: smooth; }
            
            body {
                background-color: var(--bg);
                color: var(--text);
                font-family: '${bodyFont}', sans-serif;
                overflow-x: hidden;
                line-height: 1.6;
            }

            /* === TECH-SPECIFIC EFFECTS === */
            ${specs.tech && specs.tech.effects.includes('scanlines') ? `
            body::before {
                content: '';
                position: fixed;
                inset: 0;
                background: linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%);
                background-size: 100% 4px;
                pointer-events: none;
                z-index: 9999;
                opacity: 0.1;
            }` : ''}
            ${specs.tech && specs.tech.effects.includes('floating-blobs') ? `
            body {
                background: linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 100%);
                min-height: 100vh;
                position: relative;
            }
            body::before, body::after {
                content: '';
                position: fixed;
                border-radius: 50%;
                filter: blur(80px);
                z-index: -1;
                animation: float-blob 10s infinite ease-in-out alternate;
            }
            body::before {
                width: 600px; height: 600px;
                background: linear-gradient(to right, #6366f1, #a855f7);
                top: -100px; left: -100px;
            }
            body::after {
                width: 500px; height: 500px;
                background: linear-gradient(to right, #3b82f6, #06b6d4);
                bottom: -50px; right: -50px;
                animation-delay: -5s;
            }
            @keyframes float-blob {
                0% { transform: translate(0, 0) scale(1); }
                100% { transform: translate(50px, 50px) scale(1.1); }
            }
            .hero-badge, .feature-card, .btn, nav {
                backdrop-filter: blur(16px) saturate(180%);
                -webkit-backdrop-filter: blur(16px) saturate(180%);
                background-color: rgba(255, 255, 255, 0.4) !important;
                border: 1px solid rgba(255, 255, 255, 0.6) !important;
            }
            ` : ''}

            ${specs.tech && specs.tech.effects.includes('hex-grid') ? `
            body::after {
                content: '';
                position: fixed;
                inset: 0;
                background-image: 
                    radial-gradient(circle at 50% 50%, transparent 60%, var(--bg) 100%),
                    linear-gradient(rgba(255, 0, 60, 0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 0, 60, 0.03) 1px, transparent 1px);
                background-size: 100% 100%, 40px 40px, 40px 40px;
                pointer-events: none;
                z-index: 0;
                opacity: 0.8;
            }
            .hero h1 {
                letter-spacing: 5px;
                text-transform: uppercase;
                transform: scaleY(1.1);
            }
            ` : ''}

            /* === TYPOGRAPHY === */
            h1, h2, h3, h4, .brand {
                font-family: '${headFont}', serif;
                font-weight: 900;
            }

            h1 { 
                font-size: clamp(2.5rem, 6vw, 4.5rem); 
                line-height: 1.1; 
                margin-bottom: 1.5rem;
                ${specs.tech && specs.tech.effects.includes('glow-text') ? `
                text-shadow: 0 0 20px var(--primary), 0 0 40px var(--primary);
                ` : ''}
            }
            h2 { font-size: clamp(2rem, 4vw, 3rem); line-height: 1.2; margin-bottom: 1rem; }
            h3 { font-size: clamp(1.5rem, 3vw, 2rem); margin-bottom: 0.75rem; }
            p { font-size: 1.125rem; line-height: 1.7; opacity: 0.9; }

            /* === BUTTONS === */
            .btn {
                display: inline-block;
                padding: 16px 40px;
                background: var(--primary);
                color: ${specs.vibe === 'saas-clean' || specs.vibe === 'ecommerce-modern' ? '#fff' : '#000'};
                text-decoration: none;
                font-weight: 700;
                border-radius: var(--rounded);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                border: none;
                text-transform: uppercase;
                letter-spacing: 1px;
                cursor: pointer;
                font-size: 0.95rem;
                position: relative;
                overflow: hidden;
                ${specs.tech && specs.tech.effects.includes('clip-path-buttons') ? `
                    clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
                    padding: 18px 45px;
                ` : ''}
            }
            
            .btn::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                border-radius: 50%;
                background: rgba(255,255,255,0.3);
                transform: translate(-50%, -50%);
                transition: width 0.6s, height 0.6s;
            }

            .btn:hover::before {
                width: 400px;
                height: 400px;
            }

            .btn:hover {
                transform: translateY(-3px);
                box-shadow: ${specs.ui.shadow}, 0 10px 20px rgba(0,0,0,0.2);
            }

            .btn-secondary {
                background: transparent;
                border: 2px solid var(--text);
                color: var(--text);
            }
            .btn-secondary:hover {
                background: var(--text);
                color: var(--bg);
            }

            /* === NAVBAR === */
            nav {
                position: fixed;
                top: 0; left: 0; right: 0;
                z-index: 1000;
                background: ${specs.vibe === 'saas-clean' ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.8)'};
                backdrop-filter: blur(10px);
                border-bottom: 1px solid ${specs.vibe === 'saas-clean' ? '#e5e7eb' : 'rgba(255,255,255,0.1)'};
                padding: 1.25rem 5%;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .brand {
                font-size: 1.75rem;
                font-weight: bold;
                letter-spacing: -0.5px;
                color: var(--primary);
            }
            
            .nav-links {
                display: flex;
                gap: 2.5rem;
                list-style: none;
                align-items: center;
            }
            
            .nav-links a {
                color: var(--text);
                text-decoration: none;
                font-weight: 500;
                opacity: 0.8;
                transition: 0.2s;
                font-size: 0.95rem;
            }
            .nav-links a:hover { opacity: 1; color: var(--primary); }

            .nav-cta {
                padding: 10px 25px;
                background: var(--primary);
                color: ${specs.vibe === 'saas-clean' ? '#fff' : '#000'};
                border-radius: var(--rounded);
                font-weight: 600;
                opacity: 1 !important;
            }

            /* === HERO SECTION === */
            .hero {
                min-height: 100vh;
                display: flex;
                align-items: center;
                padding: 8rem 5% 4rem;
                position: relative;
                background: ${specs.vibe === 'saas-clean' || specs.vibe === 'ecommerce-modern' ? 'var(--bg)' : `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${images.background}')`};
                background-size: cover;
                background-position: center;
                background-attachment: fixed;
            }

            .hero-container {
                max-width: 1400px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                gap: 4rem;
                width: 100%;
                position: relative;
                z-index: 2;
            }
            
            .hero-content {
                flex: 1;
            }

            .hero-badge {
                display: inline-block;
                padding: 8px 20px;
                background: ${specs.ui.glass ? 'rgba(255,255,255,0.1)' : 'var(--surface)'};
                border-radius: 50px;
                margin-bottom: 2rem;
                font-size: 0.9rem;
                border: 1px solid ${specs.ui.glass ? 'rgba(255,255,255,0.2)' : 'var(--primary)'};
                color: var(--primary);
                font-weight: 600;
                ${specs.ui.glass ? 'backdrop-filter: blur(10px);' : ''}
            }

            .hero-actions {
                display: flex;
                gap: 1.5rem;
                margin-top: 2.5rem;
                flex-wrap: wrap;
            }

            .hero-stats {
                margin-top: 4rem;
                display: flex;
                gap: 3rem;
                opacity: 0.8;
            }
            .stat strong {
                font-size: 2rem;
                display: block;
                color: var(--primary);
                font-weight: 800;
            }
            .stat span { font-size: 0.9rem; opacity: 0.7; }
            
            .hero-visual {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
            }
            
            .hero-visual img {
                max-width: 100%;
                height: auto;
                border-radius: var(--rounded);
                ${specs.tech && specs.tech.animations === 'float-glow' ? `
                filter: drop-shadow(0 0 40px rgba(168, 85, 247, 0.6));
                animation: float 6s ease-in-out infinite;
                ` : ''}
                ${specs.ui.shadow ? `box-shadow: ${specs.ui.shadow};` : ''}
            }

            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-20px); }
            }

            /* === LAYOUT VARIANTS === */
            
            /* 1. MODERN SPLIT LAYOUT */
            .layout-modern-split .hero {
                padding: 0;
            }
            .layout-modern-split .hero-container {
                max-width: 100%;
                margin: 0;
                gap: 0;
            }
            .layout-modern-split .hero-content {
                padding: 0 5%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 100vh;
            }
            .layout-modern-split .hero-visual {
                height: 100vh;
                margin: 0;
            }
            .layout-modern-split .hero-visual img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 0;
                animation: none;
                box-shadow: none;
            }

            /* 2. IMMERSIVE MINIMAL LAYOUT */
            .layout-immersive-minimal .hero {
                background: url('${images.background}') no-repeat center center/cover !important;
                text-align: center;
                position: relative;
            }
            .layout-immersive-minimal .hero::before {
                content: '';
                position: absolute;
                inset: 0;
                background: rgba(0,0,0,0.6);
                z-index: 1;
            }
            .layout-immersive-minimal .hero-container {
                z-index: 2;
                flex-direction: column;
                justify-content: center;
                height: 100vh;
                max-width: 900px;
                margin: 0 auto;
            }
            .layout-immersive-minimal .hero-visual {
                display: none; 
            }
            .layout-immersive-minimal .hero-badge {
                margin-left: auto; margin-right: auto;
            }
            .layout-immersive-minimal .hero-actions {
                justify-content: center;
            }
            .layout-immersive-minimal h1 {
                font-size: clamp(3rem, 7vw, 6rem);
                color: #fff;
            }
            .layout-immersive-minimal p {
                font-size: 1.5rem;
                color: rgba(255,255,255,0.9);
            }

            /* === SECTIONS === */
            section {
                padding: 6rem 5%;
                max-width: 1400px;
                margin: 0 auto;
            }

            .section-header {
                text-align: center;
                margin-bottom: 4rem;
            }
            .section-header p {
                max-width: 700px;
                margin: 1rem auto 0;
                opacity: 0.7;
            }

            /* === FEATURES === */
            .features-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 2.5rem;
            }
            
            .feature-card {
                background: var(--surface);
                padding: 2.5rem;
                border-radius: var(--rounded);
                border: ${specs.ui.border};
                transition: all 0.3s ease;
                ${specs.ui.glass ? 'backdrop-filter: blur(10px);' : ''}
            }
            
            .feature-card:hover {
                transform: translateY(-10px);
                box-shadow: ${specs.ui.shadow};
                ${specs.vibe !== 'saas-clean' ? 'background: var(--primary); color: #000;' : ''}
            }
            
            .feature-icon {
                font-size: 2.5rem;
                color: var(--primary);
                margin-bottom: 1.5rem;
            }
            .feature-card:hover .feature-icon { color: ${specs.vibe === 'saas-clean' ? 'var(--primary)' : '#000'}; }

            /* === TESTIMONIALS === */
            .testimonials-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                gap: 2rem;
            }
            
            .testimonial-card {
                background: var(--surface);
                padding: 2rem;
                border-radius: var(--rounded);
                border: ${specs.ui.border};
            }
            
            .stars {
                color: #fbbf24;
                font-size: 1.2rem;
                margin-bottom: 1rem;
            }
            
            .testimonial-text {
                font-style: italic;
                margin-bottom: 1.5rem;
                line-height: 1.8;
            }
            
            .testimonial-author strong {
                display: block;
                margin-bottom: 0.25rem;
            }
            .testimonial-author span {
                font-size: 0.9rem;
                opacity: 0.6;
            }

            /* === PRICING === */
            .pricing-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
                margin-top: 3rem;
            }
            
            .pricing-card {
                background: var(--surface);
                padding: 3rem 2rem;
                border-radius: var(--rounded);
                border: ${specs.ui.border};
                text-align: center;
                transition: 0.3s;
            }
            
            .pricing-card.highlight {
                border: 3px solid var(--primary);
                transform: scale(1.05);
                box-shadow: ${specs.ui.shadow};
            }
            
            .pricing-card:hover { transform: translateY(-10px); }
            
            .plan-name {
                font-size: 1.5rem;
                font-weight: 700;
                margin-bottom: 1rem;
                color: var(--primary);
            }
            
            .plan-price {
                font-size: 3rem;
                font-weight: 900;
                margin-bottom: 0.5rem;
            }
            .plan-price span { font-size: 1rem; opacity: 0.6; }
            
            .plan-features {
                list-style: none;
                margin: 2rem 0;
                text-align: left;
            }
            .plan-features li {
                padding: 0.75rem 0;
                border-bottom: 1px solid rgba(255,255,255,0.1);
            }
            .plan-features li:before {
                content: '✓';
                color: var(--primary);
                font-weight: bold;
                margin-right: 10px;
            }

            /* === FOOTER === */
            footer {
                background: ${specs.vibe === 'saas-clean' ? '#f9fafb' : 'rgba(0,0,0,0.5)'};
                padding: 4rem 5% 2rem;
                border-top: 1px solid ${specs.vibe === 'saas-clean' ? '#e5e7eb' : 'rgba(255,255,255,0.1)'};
            }
            
            .footer-content {
                max-width: 1400px;
                margin: 0 auto;
                display: grid;
                grid-template-columns: 2fr 1fr 1fr 1fr;
                gap: 3rem;
                margin-bottom: 3rem;
            }
            
            .footer-brand {
                font-size: 1.5rem;
                font-weight: bold;
                margin-bottom: 1rem;
                color: var(--primary);
            }
            
            .footer-col h4 {
                margin-bottom: 1.5rem;
                font-size: 1rem;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            
            .footer-col ul {
                list-style: none;
            }
            .footer-col ul li {
                margin-bottom: 0.75rem;
            }
            .footer-col ul li a {
                color: var(--text);
                text-decoration: none;
                opacity: 0.7;
                transition: 0.2s;
            }
            .footer-col ul li a:hover {
                opacity: 1;
                color: var(--primary);
            }
            
            .social-icons {
                display: flex;
                gap: 1rem;
                margin-top: 1.5rem;
            }
            .social-icons a {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: var(--primary);
                color: #000;
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                transition: 0.3s;
            }
            .social-icons a:hover {
                transform: translateY(-5px);
            }
            
            .footer-bottom {
                text-align: center;
                padding-top: 2rem;
                border-top: 1px solid rgba(255,255,255,0.1);
                opacity: 0.6;
                font-size: 0.9rem;
            }

            /* === RESPONSIVE === */
            @media (max-width: 768px) {
                .hero-container { flex-direction: column; text-align: center; }
                .hero-visual { margin-top: 3rem; }
                .hero-actions { justify-content: center; }
                .nav-links { display: none; }
                .footer-content { grid-template-columns: 1fr; }
                h1 { font-size: 2.5rem; }
            }
        `;

        // HTML Generator with Smart Sections
        let html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${specs.content.hero.headline} | ${specs.content.brand}</title>
                <meta name="description" content="${specs.content.hero.subhead}">
                <style>${css}</style>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
            </head>
            <body class="layout-${specs.layout || 'classic-centered'}">
        `;

        // NAVBAR
        html += `
            <nav>
                <div class="brand">${specs.content.brand}</div>
                <ul class="nav-links">
                    ${specs.sections.features ? '<li><a href="#features">Features</a></li>' : ''}
                    ${specs.sections.testimonials ? '<li><a href="#testimonials">Testimonials</a></li>' : ''}
                    ${specs.sections.pricing ? '<li><a href="#pricing">Pricing</a></li>' : ''}
                    <li><a href="#" class="nav-cta">Get Started</a></li>
                </ul>
            </nav>
        `;

        // HERO
        if (specs.sections.hero) {
            html += `
                <header class="hero">
                    <div class="hero-container">
                        <div class="hero-content">
                            <div class="hero-badge">✨ Now Available</div>
                            <h1>${specs.content.hero.headline}</h1>
                            <p>${specs.content.hero.subhead}</p>
                            
                            <div class="hero-actions">
                                <a href="#" class="btn">${specs.content.hero.cta}</a>
                                <a href="#" class="btn btn-secondary">${specs.content.hero.ctaSecondary}</a>
                            </div>

                            <div class="hero-stats">
                                <div class="stat">
                                    <strong>2M+</strong>
                                    <span>Active Users</span>
                                </div>
                                <div class="stat">
                                    <strong>4.9/5</strong>
                                    <span>Rating</span>
                                </div>
                                <div class="stat">
                                    <strong>150+</strong>
                                    <span>Countries</span>
                                </div>
                            </div>
                        </div>

                        <div class="hero-visual">
                            <img src="${images.hero}" alt="Hero Visual">
                        </div>
                    </div>
                </header>
            `;
        }

        // FEATURES
        if (specs.sections.features) {
            html += `
                <section id="features">
                    <div class="section-header">
                        <h2>Powerful Features</h2>
                        <p>Everything you need to succeed, all in one platform.</p>
                    </div>
                    <div class="features-grid">
                        ${specs.content.features.map(f => `
                            <div class="feature-card">
                                <div class="feature-icon">
                                    <i class="fa-solid fa-${f.icon}"></i>
                                </div>
                                <h3>${f.title}</h3>
                                <p>${f.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                </section>
            `;
        }

        // TESTIMONIALS
        if (specs.sections.testimonials) {
            html += `
                <section id="testimonials" style="background: var(--surface);">
                    <div class="section-header">
                        <h2>Loved by Thousands</h2>
                        <p>See what our customers have to say about us.</p>
                    </div>
                    <div class="testimonials-grid">
                        ${specs.content.testimonials.map(t => `
                            <div class="testimonial-card">
                                <div class="stars">${'★'.repeat(t.rating)}</div>
                                <p class="testimonial-text">"${t.text}"</p>
                                <div class="testimonial-author">
                                    <strong>${t.name}</strong>
                                    <span>${t.role}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </section>
            `;
        }

        // PRICING
        if (specs.sections.pricing && specs.content.pricing) {
            html += `
                <section id="pricing">
                    <div class="section-header">
                        <h2>Simple, Transparent Pricing</h2>
                        <p>Choose the plan that's right for you.</p>
                    </div>
                    <div class="pricing-grid">
                        ${specs.content.pricing.map(plan => `
                            <div class="pricing-card ${plan.highlight ? 'highlight' : ''}">
                                ${plan.highlight ? '<div class="hero-badge" style="margin-bottom: 1rem;">Most Popular</div>' : ''}
                                <div class="plan-name">${plan.name}</div>
                                <div class="plan-price">${plan.price}<span>${plan.period}</span></div>
                                <ul class="plan-features">
                                    ${plan.features.map(f => `<li>${f}</li>`).join('')}
                                </ul>
                                <a href="#" class="btn" style="width: 100%;">Choose Plan</a>
                            </div>
                        `).join('')}
                    </div>
                </section>
            `;
        }

        // FOOTER
        if (specs.sections.footer) {
            html += `
                <footer>
                    <div class="footer-content">
                        <div class="footer-col">
                            <div class="footer-brand">${specs.content.brand}</div>
                            <p>${specs.content.footer.tagline}</p>
                            <div class="social-icons">
                                ${specs.content.footer.social.map(s => `
                                    <a href="#"><i class="fa-brands fa-${s}"></i></a>
                                `).join('')}
                            </div>
                        </div>
                        <div class="footer-col">
                            <h4>Product</h4>
                            <ul>
                                ${specs.content.footer.links.product.map(l => `<li><a href="#">${l}</a></li>`).join('')}
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Company</h4>
                            <ul>
                                ${specs.content.footer.links.company.map(l => `<li><a href="#">${l}</a></li>`).join('')}
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Legal</h4>
                            <ul>
                                ${specs.content.footer.links.legal.map(l => `<li><a href="#">${l}</a></li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; 2024 ${specs.content.brand}. All rights reserved. Built with VISIONS AI.</p>
                    </div>
                </footer>
            `;
        }

        html += `</body></html>`;
        return html;
    }
};

// --- ORCHESTRATOR ---
async function startAIPipeline() {
    const prompt = document.getElementById('aiPrompt').value || "Modern SaaS platform for teams";
    const terminal = document.getElementById('ai-terminal');
    const apiKey = document.getElementById('apiKey').value;

    const options = {
        hero: true, features: true, pricing: true, footer: true
    };

    terminal.style.display = 'block';
    terminal.innerHTML = '';
    const log = (msg) => {
        const div = document.createElement('div');
        div.className = 'log-entry';
        div.style.marginTop = '5px';
        div.textContent = '> ' + msg;
        terminal.appendChild(div);
        terminal.scrollTop = terminal.scrollHeight;
    };

    try {
        log(`[INIT] AI Pipeline Started`);
        log(`[PROMPT] "${prompt}"`);
        log(`[MODE] ${apiKey ? 'Real AI (Gemini)' : 'Offline Intelligence'}`);

        await new Promise(r => setTimeout(r, 600));

        // 1. BRAIN
        log(`[BRAIN] Analyzing business requirements...`);
        const specs = await AI_Brain.analyze(prompt, apiKey);
        log(`[BRAIN] Theme: ${specs.vibe.toUpperCase()}`);
        log(`[BRAIN] Tech: ${specs.tech ? specs.tech.framework + ' + ' + specs.tech.animations : 'vanilla'}`);
        log(`[BRAIN] Sections: ${Object.keys(specs.sections).filter(k => specs.sections[k]).join(', ')}`);

        // 2. ARTIST
        log(`[ARTIST] Generating visual assets...`);
        let images;
        if (specs.imagePrompts && specs.imagePrompts.background) {
            images = {
                background: "https://image.pollinations.ai/prompt/" + encodeURIComponent(specs.imagePrompts.background + ", 8k") + "?nologo=true",
                hero: "https://image.pollinations.ai/prompt/" + encodeURIComponent(specs.imagePrompts.hero + ", 8k") + "?nologo=true"
            };
        } else {
            images = AI_Artist.generate(specs);
        }
        log(`[ARTIST] Assets ready (Pollinations AI)`);

        // 3. BUILDER
        await new Promise(r => setTimeout(r, 800));
        log(`[BUILDER] Compiling production code...`);
        log(`[BUILDER] Applying ${specs.tech && specs.tech.effects ? specs.tech.effects.length : 0} visual effects`);
        const finalCode = AI_Builder.construct(specs, images, options);

        // 4. RENDER
        log(`[RENDER] Deploying to preview...`);
        const frame = document.getElementById('previewFrame');
        const doc = frame.contentWindow.document;
        doc.open();
        doc.write(finalCode);
        doc.close();

        log(`[SUCCESS] Professional landing page generated! 🚀`);
        log(`[STATS] ${finalCode.length} bytes | ${specs.mode}`);

    } catch (e) {
        log(`[ERROR] ${e.message}`);
        console.error(e);
    }
}

// Global functions
window.generateSite = startAIPipeline;

// === UI MANAGEMENT ===
window.switchTab = (tabName) => {
    // Remove active from all tabs
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Add active to selected
    event.target.classList.add('active');
    document.getElementById(`tab-${tabName}`).classList.add('active');

    // Load data if needed
    if (tabName === 'history') loadHistory();
};

// === PROJECT MANAGEMENT ===
window.saveProject = () => {
    const projectName = document.getElementById('projectName').value || 'Untitled';
    const prompt = document.getElementById('aiPrompt').value;
    const apiKey = document.getElementById('apiKey').value;

    const project = {
        name: projectName,
        prompt: prompt,
        apiKey: apiKey,
        hero: true, features: true, pricing: true, footer: true,
        timestamp: new Date().toISOString()
    };

    // Get existing projects
    const projects = JSON.parse(localStorage.getItem('visions_projects') || '[]');
    projects.push(project);
    localStorage.setItem('visions_projects', JSON.stringify(projects));

    showToast(`Project "${projectName}" saved locally!`, 'success');
};

window.showLoadModal = () => {
    const modal = document.getElementById('loadModal');
    const list = document.getElementById('savedProjectsList');
    const projects = JSON.parse(localStorage.getItem('visions_projects') || '[]');

    if (projects.length === 0) {
        list.innerHTML = '<p style="opacity: 0.5; text-align: center; padding: 20px;">No saved projects</p>';
    } else {
        list.innerHTML = projects.map((proj, idx) => `
            <div class="saved-project-item" onclick="loadProject(${idx})">
                <div class="saved-project-info">
                    <h4>${proj.name}</h4>
                    <p>${new Date(proj.timestamp).toLocaleString()}</p>
                </div>
                <button class="delete-project-btn" onclick="event.stopPropagation(); deleteProject(${idx})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }

    modal.classList.add('active');
};

window.closeLoadModal = () => {
    document.getElementById('loadModal').classList.remove('active');
};

window.loadProject = (index) => {
    const projects = JSON.parse(localStorage.getItem('visions_projects') || '[]');
    const project = projects[index];

    if (project) {
        document.getElementById('projectName').value = project.name;
        document.getElementById('aiPrompt').value = project.prompt;
        document.getElementById('apiKey').value = project.apiKey || '';
        // Structure prefs handled by AI

        closeLoadModal();
        showToast(`Project "${project.name}" loaded!`, 'success');
    }
};

window.deleteProject = (index) => {
    if (confirm('Delete this project?')) {
        const projects = JSON.parse(localStorage.getItem('visions_projects') || '[]');
        projects.splice(index, 1);
        localStorage.setItem('visions_projects', JSON.stringify(projects));
        showLoadModal(); // Refresh list
    }
};

// === TEMPLATES ===
const TEMPLATES = {
    saas: "Modern SaaS platform for project management teams with clean blue design",
    gaming: "Esports tournament platform with red neon and gritty textures",
    ecommerce: "Luxury fashion ecommerce store with minimal elegant design",
    portfolio: "Creative portfolio showcase for designer with dark theme",
    ai: "AI-powered chatbot landing page with purple neon and glassmorphism",
    fantasy: "Fantasy RPG game website with gold accents and cinematic feel"
};

window.loadTemplate = (templateKey) => {
    const prompt = TEMPLATES[templateKey];
    document.getElementById('aiPrompt').value = prompt;
    document.getElementById('projectName').value = templateKey.charAt(0).toUpperCase() + templateKey.slice(1) + ' Site';

    // Switch to create tab
    document.querySelectorAll('.tab-btn')[0].click();

    showToast(`Template "${templateKey}" loaded!`, 'info');
};

// === HISTORY ===
window.loadHistory = () => {
    const history = JSON.parse(localStorage.getItem('visions_history') || '[]');
    const list = document.getElementById('historyList');

    if (history.length === 0) {
        list.innerHTML = '<p style="opacity: 0.5; text-align: center; padding: 20px;">No history yet. Generate your first site!</p>';
    } else {
        list.innerHTML = history.slice().reverse().map((item, idx) => `
            <div class="history-item" onclick="loadHistoryItem(${history.length - 1 - idx})">
                <div class="history-item-title">${item.prompt.substring(0, 50)}...</div>
                <div class="history-item-meta">
                    <span>${item.theme}</span>
                    <span>${new Date(item.timestamp).toLocaleTimeString()}</span>
                </div>
            </div>
        `).join('');
    }
};

window.loadHistoryItem = (index) => {
    const history = JSON.parse(localStorage.getItem('visions_history') || '[]');
    const item = history[index];

    if (item) {
        const frame = document.getElementById('previewFrame');
        const doc = frame.contentWindow.document;
        doc.open();
        doc.write(item.code);
        doc.close();

        // Switch to create tab and populate
        document.getElementById('aiPrompt').value = item.prompt;
        document.querySelectorAll('.tab-btn')[0].click();
    }
};

window.clearHistory = () => {
    if (confirm('Clear all history?')) {
        localStorage.removeItem('visions_history');
        loadHistory();
    }
};

// Save to history after generation
window.saveToHistory = (prompt, theme, code) => {
    const history = JSON.parse(localStorage.getItem('visions_history') || '[]');
    history.push({
        prompt: prompt,
        theme: theme,
        code: code,
        timestamp: new Date().toISOString()
    });

    // Keep only last 20
    if (history.length > 20) history.shift();

    localStorage.setItem('visions_history', JSON.stringify(history));
};

// === CODE EDITOR ===
window.toggleCodeEditor = () => {
    const editor = document.getElementById('codeEditor');
    const frame = document.getElementById('previewFrame');

    if (editor.classList.contains('active')) {
        editor.classList.remove('active');
    } else {
        const html = frame.contentWindow.document.documentElement.outerHTML;
        document.getElementById('codeTextarea').value = html;
        editor.classList.add('active');
    }
};

window.applyCodeChanges = () => {
    const code = document.getElementById('codeTextarea').value;
    const frame = document.getElementById('previewFrame');
    const doc = frame.contentWindow.document;
    doc.open();
    doc.write(code);
    doc.close();

    showToast('Code changes applied!', 'success');
};

// === UTILITY FUNCTIONS ===
window.copyCode = () => {
    const frame = document.getElementById('previewFrame');
    const html = frame.contentWindow.document.documentElement.outerHTML;

    navigator.clipboard.writeText(html).then(() => {
        showToast('Code copied to clipboard!', 'success');
    }).catch(err => {
        console.error('Copy failed:', err);
    });
};

window.refreshPreview = () => {
    const frame = document.getElementById('previewFrame');
    frame.contentWindow.location.reload();
};

window.downloadCode = () => {
    const frame = document.getElementById('previewFrame');
    const html = frame.contentWindow.document.documentElement.outerHTML;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'landing-page.html';
    a.click();
    URL.revokeObjectURL(url);
};

// Update startAIPipeline to save history
const originalStartAIPipeline = startAIPipeline;
window.generateSite = async function () {
    await originalStartAIPipeline();

    // Save to history
    const prompt = document.getElementById('aiPrompt').value;
    const frame = document.getElementById('previewFrame');
    const code = frame.contentWindow.document.documentElement.outerHTML;
    const theme = 'Generated'; // You can extract this from specs if needed

    saveToHistory(prompt, theme, code);
};

// ==========================================
// 🚀 FULL STACK API INTEGRATION
// ==========================================
const API_URL = '/api/v1';

console.log('🔌 Connecting to Visions AI Backend...');

// 1. Save Project to Server
window.saveProject = async () => {
    const projectName = document.getElementById('projectName').value || 'Untitled';
    const prompt = document.getElementById('aiPrompt').value;
    const apiKey = document.getElementById('apiKey').value;

    const project = {
        name: projectName,
        prompt: prompt,
        apiKey: apiKey,
        hero: true, features: true, pricing: true, footer: true
    };

    try {
        const res = await fetch(`${API_URL}/projects`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(project)
        });

        if (res.ok) showToast(`Project "${projectName}" saved to cloud!`, 'success');
        else throw new Error('Failed');
    } catch (e) {
        showToast('❌ Server is offline. Run: npm start', 'error');
        console.error(e);
    }
};

// 2. Load Projects from Server
window.showLoadModal = async () => {
    const modal = document.getElementById('loadModal');
    const list = document.getElementById('savedProjectsList');

    try {
        const res = await fetch(`${API_URL}/projects`);
        const projects = await res.json();

        window.currentProjects = projects;

        if (projects.length === 0) {
            list.innerHTML = '<p style="opacity: 0.5; text-align: center; padding: 20px;">No saved projects in Database</p>';
        } else {
            list.innerHTML = projects.map((proj, idx) => `
                <div class="saved-project-item" onclick="loadProject(${idx})">
                    <div class="saved-project-info">
                        <h4>${proj.name}</h4>
                        <p>${new Date(proj.timestamp).toLocaleString()}</p>
                    </div>
                    <button class="delete-project-btn" onclick="event.stopPropagation(); deleteProject(${proj.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('');
        }
    } catch (e) {
        list.innerHTML = '<p style="color: #ff4444; text-align: center; padding: 20px;">❌ Connection Failed<br><small>Run: node server.js</small></p>';
    }

    modal.classList.add('active');
};

window.loadProject = (index) => {
    const project = window.currentProjects[index];
    if (project) {
        document.getElementById('projectName').value = project.name;
        document.getElementById('aiPrompt').value = project.prompt;
        document.getElementById('apiKey').value = project.apiKey || '';
        // Structure prefs handled by AI
        closeLoadModal();
        showToast(`Loaded "${project.name}" from Cloud!`, 'success');
    }
};

window.deleteProject = async (id) => {
    if (confirm('Permanently delete from database?')) {
        await fetch(`${API_URL}/projects/${id}`, { method: 'DELETE' });
        showLoadModal();
    }
};

// 3. History from Server
window.loadHistory = async () => {
    const list = document.getElementById('historyList');
    try {
        const res = await fetch(`${API_URL}/history`);
        const history = await res.json();

        window.currentHistory = history;
        if (history.length === 0) {
            list.innerHTML = '<p style="opacity: 0.5; text-align: center; padding: 20px;">No history</p>';
        } else {
            list.innerHTML = history.slice().reverse().map((item, idx) => `
                <div class="history-item" onclick="loadHistoryItem(${history.length - 1 - idx})">
                    <div class="history-item-title">${item.prompt.substring(0, 40)}...</div>
                    <div class="history-item-meta">
                        <span>${item.theme}</span>
                        <span>${new Date(item.timestamp).toLocaleTimeString()}</span>
                    </div>
                </div>
            `).join('');
        }
    } catch (e) {
        list.innerHTML = '<p style="opacity: 0.5; text-align: center;">Server Offline</p>';
    }
};

window.loadHistoryItem = (index) => {
    const item = window.currentHistory[index];
    if (item) {
        const frame = document.getElementById('previewFrame');
        const doc = frame.contentWindow.document;
        doc.open(); doc.write(item.code); doc.close();
        document.getElementById('aiPrompt').value = item.prompt;
        document.querySelectorAll('.tab-btn')[0].click();
    }
};

window.saveToHistory = async (prompt, theme, code) => {
    try {
        await fetch(`${API_URL}/history`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt, theme, code })
        });
    } catch (e) { console.error('History save failed'); }
};

window.clearHistory = async () => {
    if (confirm('Clear entire database history?')) {
        await fetch(`${API_URL}/history`, { method: 'DELETE' });
        loadHistory();
    }
};


// ==========================================
// 🚀 NEW FEATURES: FULL SCREEN & CHAT EDIT
// ==========================================

// === FULL SCREEN LOGIC ===
window.toggleFullScreen = () => {
    document.querySelector('.app-container').classList.toggle('fullscreen-mode');
};

// === AI CHAT EDIT LOGIC ===
window.handleEditInput = (e) => {
    if (e.key === 'Enter') submitEditRequest();
};

window.submitEditRequest = async () => {
    const input = document.getElementById('editPromptInput');
    const prompt = input.value.trim();
    if (!prompt) return;

    // UI Updates
    const history = document.getElementById('editChatHistory');
    history.innerHTML += `<div class='user-msg'>${prompt}</div>`;
    history.scrollTop = history.scrollHeight;
    input.value = '';

    // Add loading bubble
    const loadingId = 'loading-' + Date.now();
    history.innerHTML += `<div id='${loadingId}' class='ai-msg'>Thinking... 🧠</div>`;

    try {
        const frame = document.getElementById('previewFrame');
        // Get code (Handle empty frame case)
        let currentCode = "";
        try {
            currentCode = frame.contentWindow.document.documentElement.outerHTML;
        } catch (e) { currentCode = "<html><body></body></html>"; }

        const apiKey = document.getElementById('apiKey').value;

        // Use AI to edit code
        const updatedCode = await AI_Brain.editCode(currentCode, prompt, apiKey);

        // Apply Changes
        const doc = frame.contentWindow.document;
        doc.open(); doc.write(updatedCode); doc.close();
        document.getElementById('codeTextarea').value = updatedCode; // Sync raw editor

        // Success Msg
        document.getElementById(loadingId).textContent = "Done! I've updated the design. 🎨";

        // Save to History automatically? Maybe later.

    } catch (e) {
        document.getElementById(loadingId).textContent = "Error: " + e.message;
        console.error(e);
    }
};

// Add editCode capability to Brain
AI_Brain.editCode = async (code, prompt, key) => {
    if (!key || key.length < 5) throw new Error("Please enter your API Key first!");

    const systemInstruction = `
    You are an expert Frontend Developer.
    The user wants to EDIT the following HTML code.
    User Request: "${prompt}"
    
    Rules:
    1. Return ONLY the updated full HTML code.
    2. Do NOT use markdown code blocks.
    3. Maintain all existing scripts and styles unless asked to change.
    4. Be creative but preserve the layout unless asked to redesign.
    `;

    const isOpenAI = key.startsWith('sk-');

    if (isOpenAI) {
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${key}` },
            body: JSON.stringify({
                model: "gpt-4o",
                messages: [
                    { role: "system", content: "You are a web developer. Return only HTML code." },
                    {
                        role: "user", content: `CODE:
${code.substring(0, 15000)}

INSTRUCTION: ${prompt}

OUTPUT FULL UPDATED HTML:` }
                ]
            })
        });
        const data = await res.json();
        if (data.error) throw new Error(data.error.message);
        return data.choices[0].message.content.replace(/```html/g, '').replace(/```/g, '');
    } else {
        // Gemini (Try robust models)
        // We will try gemini-1.5-flash then pro
        const models = ['gemini-1.5-flash', 'gemini-1.5-pro', 'gemini-pro'];
        let lastError = null;

        for (const model of models) {
            try {
                const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
                const res = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{ text: systemInstruction + "\n\nCODE:\n" + code.substring(0, 30000) }]
                        }]
                    })
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.error?.message || 'Failed');

                return data.candidates[0].content.parts[0].text.replace(/```html/g, '').replace(/```/g, '');
            } catch (e) {
                lastError = e;
                console.warn(`Edit Model ${model} failed`, e);
            }
        }
        throw lastError;
    }
};

// === TOAST SYSTEM ===
window.showToast = (msg, type = 'success') => {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const iconMap = {
        success: 'fa-circle-check',
        error: 'fa-circle-exclamation',
        info: 'fa-circle-info'
    };

    const toast = document.createElement('div');
    toast.className = 'toast ' + type;
    toast.innerHTML = `<i class='fas ${iconMap[type]} toast-icon'></i> <span>${msg}</span>`;

    container.appendChild(toast);

    // Remove after 3s
    setTimeout(() => {
        toast.style.animation = 'toast-slide-out 0.4s forwards';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
};

