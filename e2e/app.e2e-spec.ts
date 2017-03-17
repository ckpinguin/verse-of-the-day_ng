import { VerseOfTheDayPage } from './app.po';

describe('verse-of-the-day App', () => {
  let page: VerseOfTheDayPage;

  beforeEach(() => {
    page = new VerseOfTheDayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Verse of the day');
  });
});
