const fetch = require('node-fetch');

async function checkUrl(url) {
    console.log(`Checking: ${url}`);
    try {
        const res = await fetch(url, { redirect: 'follow' });
        console.log(`Status: ${res.status}`);
        console.log(`Final URL: ${res.url}`);
        console.log(`Content-Type: ${res.headers.get('content-type')}`);
        const buffer = await res.buffer();
        console.log(`Size: ${buffer.length} bytes`);
    } catch (e) {
        console.log(`Error: ${e.message}`);
    }
    console.log('---');
}

async function run() {
    await checkUrl('https://pollinations.ai/p/futuristic-city');
    await checkUrl('https://image.pollinations.ai/prompt/futuristic-city');
}

run();
