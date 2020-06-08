const puppeteer = require('puppeteer');
const path = require('path');


const main = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // network 상태가 idle(여유)가 있는 상태가 될 때까지 기다림
    await page.goto('https://google.com', { waitUntil: 'networkidle2' });
    // 해당 페이지를 PDF파일 A4 사이즈로 생성
    await page.pdf({ path: path.join(__dirname, '/download', 'PageToPdf.pdf'), format: 'A4' });
    await browser.close();
}
main();