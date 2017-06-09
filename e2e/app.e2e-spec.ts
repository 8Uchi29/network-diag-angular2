import { NetworkDiagPage } from './app.po';

describe('network-diag App', () => {
  let page: NetworkDiagPage;

  beforeEach(() => {
    page = new NetworkDiagPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
