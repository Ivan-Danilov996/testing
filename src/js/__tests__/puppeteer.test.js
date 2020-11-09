import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout
describe('isValid', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 100,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });
  describe('isValid', () => {
    test('should add .active class for valid number', async () => {
      await page.goto(baseUrl);
      const form = await page.$('.form');
      const input = await form.$('input');
      await input.type('4300000000000777');
      const submit = await form.$('button');
      submit.click();
      await page.waitForSelector('.happy.active');
    });
  });
  describe('noValid', () => {
    test('should add .active class for not valid number', async () => {
      await page.goto(baseUrl);
      const form = await page.$('.form');
      const input = await form.$('.input');
      await input.type('4300007');
      const submit = await form.$('.button');
      submit.click();
      await page.waitForSelector('.error.active');
    });
  });
});
