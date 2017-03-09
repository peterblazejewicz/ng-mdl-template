import { NgMdlTemplatePage } from './app.po';

describe('ng-mdl-template App', () => {
  let page: NgMdlTemplatePage;

  beforeEach(() => {
    page = new NgMdlTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ngmdl works!');
  });
});
