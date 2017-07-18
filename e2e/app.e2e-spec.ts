import { AngularReduxQuickstartPage } from './app.po';

describe('angular-redux-quickstart App', () => {
  let page: AngularReduxQuickstartPage;

  beforeEach(() => {
    page = new AngularReduxQuickstartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
