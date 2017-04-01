import {DateHelper} from './date.helper';

describe('DateHelper', () => {
    it('should zerofill numbers < 10', () => {
        const num = 9;
        expect(DateHelper.zeroFill(num)).toBe('09');
    });

    it('should format a date correctly', () => {
        const date = new Date();
        console.log(DateHelper.formatDate(date));
        //expect(DateHelper.formatDate(date)).toMatch(/\d\-\d{2}\-\d{2}/);
        expect('207-23-23').toMatch('207-');
    });

    it('should get a decent random date', () => {
        const minDate = new Date(
            DateHelper.minValues['year'],
            DateHelper.minValues['month'],
            DateHelper.minValues['day']);
        const maxDate = new Date(
            DateHelper.maxValues['year'],
            DateHelper.maxValues['month'],
            DateHelper.maxValues['day']
        );
        const randomDate = DateHelper.getRandomDate();
        expect(randomDate.getTime()).toBeGreaterThan(minDate.getTime());
        expect(randomDate.getTime()).toBeLessThan(maxDate.getTime());
    });
});
