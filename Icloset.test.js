const puppeteer = require('puppeteer');

describe('Teste de Acessibilidade da Página de Login', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('A página de login é carregada com sucesso', async () => {
    await page.goto(`file://${__dirname}/index.html`);
    const title = await page.title();
    expect(title).toBe('Login Validation');
  });

  test('Os campos de email e senha estão presentes na página de login', async () => {
    await page.goto(`file://${__dirname}/index.html`);
    const emailInput = await page.$('#email');
    const passwordInput = await page.$('#password');
    expect(emailInput).not.toBeNull();
    expect(passwordInput).not.toBeNull();
  });

  test('O botão de login está presente na página de login', async () => {
    await page.goto(`file://${__dirname}/index.html`);
    const loginButton = await page.$('#botao');
    expect(loginButton).not.toBeNull();
  });

  test('O link para a página de cadastro está presente na página de login', async () => {
    await page.goto(`file://${__dirname}/index.html`);
    const registerLink = await page.$('a[href="cadastro.html"]');
    expect(registerLink).not.toBeNull();
  });

  
  // Adicione mais testes conforme necessário
});

