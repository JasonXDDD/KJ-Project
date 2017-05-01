import { LiveScorePage } from './app.po';

describe('live-score App', function() {
  let page: LiveScorePage;

  beforeEach(() => {
    page = new LiveScorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
