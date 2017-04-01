export class DateHelper {

    static maxValues = {
        day: 31,
        month: 12,
        year: 2017
    };
    static minValues = {
        day: 1,
        month: 1,
        year: 2014
    };

    static randomDateBetween(start: Date, end: Date): Date {
        return new Date(start.getTime()
            + Math.random() * (end.getTime() - start.getTime()));
    }

    static getRandomDate() {
        return DateHelper.randomDateBetween(new Date(
            DateHelper.minValues['year'],
            DateHelper.minValues['month'],
            DateHelper.minValues['day']
        ),
        new Date());
    }

    static formatDate(date: Date): string {
        // console.log('formatDate(): ', date);
        return date.getFullYear() + '-' + DateHelper.zeroFill(date.getMonth() + 1) // month is 0-based!
            + '-' + DateHelper.zeroFill(date.getDate());
    }

    static zeroFill(i: number): string {
        return (i < 10 ? '0' : '') + i;
    }
}
