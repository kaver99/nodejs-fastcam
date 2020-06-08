const puppeteer = require('puppeteer');
const path = require('path');

const main = async () => {
    // 해당 브라우저 런처
    const browser = await puppeteer.launch();
    // 새로운 페이지 오픈
    const page = await browser.newPage();
    // goto로 새로운 페이지로 이동
    await page.goto('https://www.naver.com');
    // 해당 페이지 Screen Shot 파일 생성
    await page.screenshot({ path: path.join(__dirname, '/download','screenshot.png') });
    // browser 종료
    await browser.close();
}
main();