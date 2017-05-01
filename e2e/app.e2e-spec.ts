import { MlbDataNg2Page } from './app.po';

describe('mlb-data-ng2 App', () => {
  let page: MlbDataNg2Page;

  beforeEach(() => {
    page = new MlbDataNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
