import { CraigslistPage } from './app.po';

describe('craigslist App', () => {
  let page: CraigslistPage;

  beforeEach(() => {
    page = new CraigslistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
