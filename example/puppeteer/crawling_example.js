const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const main = async () => {
    try {
        const browser = await puppeteer.launch();
        // 페이지 이동
        const page = await browser.newPage();
        // goto를 통해 해당 페이지로 이동({ 언제까지 실행할 것인지 정의 })
        await page.goto('https://example.com', { waitUntil: 'networkidle2' });
        // 해당 페이지 로딩을 위해 6초정도 기다림
        await page.waitFor(6000);
        const html = await page.content();
        fs.writeFileSync(path.join(__dirname, '/download', 'crawling_result2.html'), html);
        await browser.close();
    } catch(e) {
        console.error(e);
    }
}
main();
