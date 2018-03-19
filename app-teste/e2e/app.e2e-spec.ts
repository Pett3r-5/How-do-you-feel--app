import { AppTestePage } from './app.po';

describe('app-teste App', function() {
  let page: AppTestePage;

  beforeEach(() => {
    page = new AppTestePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
