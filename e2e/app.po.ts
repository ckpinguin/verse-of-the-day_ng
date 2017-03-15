import { browser, element, by } from 'protractor';

export class VerseOfTheDayPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ck-root h1')).getText();
  }
}
