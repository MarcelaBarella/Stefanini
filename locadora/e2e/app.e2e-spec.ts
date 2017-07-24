import { LocadoraPage } from './app.po';

describe('locadora App', function() {
  let page: LocadoraPage;

  beforeEach(() => {
    page = new LocadoraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
