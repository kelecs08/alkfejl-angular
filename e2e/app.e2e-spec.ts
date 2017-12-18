import { AppPage } from './app.po';

describe('cinema App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display films', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Films');
  });
});
