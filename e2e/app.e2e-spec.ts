import { IgasusPage } from './app.po';

describe('igasus App', () => {
  let page: IgasusPage;

  beforeEach(() => {
    page = new IgasusPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
