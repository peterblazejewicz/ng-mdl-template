import { browser, element, by } from 'protractor';

export class NgMdlTemplatePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngmdl-root h1')).getText();
  }
}
