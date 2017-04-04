import { MyFrstAngular2AppPage } from './app.po';

describe('my-frst-angular2-app App', () => {
  let page: MyFrstAngular2AppPage;

  beforeEach(() => {
    page = new MyFrstAngular2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
