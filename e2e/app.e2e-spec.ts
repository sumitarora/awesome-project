import { LunchAndLearnPage } from './app.po';

describe('lunch-and-learn App', () => {
  let page: LunchAndLearnPage;

  beforeEach(() => {
    page = new LunchAndLearnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
