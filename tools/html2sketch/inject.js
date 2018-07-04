const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

module.exports = (componentName) => {
    const url = `http://localhost:8000/component/${componentName}`;
    puppeteer.launch({headless: false}).then(async (browser) => {
        const page = await browser.newPage();
        page.on('console', msg => console.log('PAGE LOG:', msg.text()));
        await page.setViewport({width: 800, height: 600});
        await page.goto(url, {
           waitUntil: "networkidle2"
        });

        await page.addScriptTag({
            path: "./build/page2layers.bundle.js"
        });

        const asketchJSONString = await page.evaluate(`
            page2layers
                .getASketchPage()
                .then(result => JSON.stringify(result));
        `);

        fs.writeFileSync(path.resolve(__dirname, `json/${componentName}.json`), asketchJSONString);
        browser.close();
    });
};