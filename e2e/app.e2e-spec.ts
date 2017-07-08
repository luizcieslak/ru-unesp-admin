import { RuAdminPage } from './app.po';

describe('ru-admin App', () => {
  let page: RuAdminPage;

  beforeEach(() => {
    page = new RuAdminPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
