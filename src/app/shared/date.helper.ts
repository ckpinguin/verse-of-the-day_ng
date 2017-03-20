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

    static randomDate(start: Date, end: Date): Date {
        return new Date(start.getTime()
            + Math.random() * (end.getTime() - start.getTime()));
    }

    static formatDate(date: Date): string {
        return date.getFullYear() + '-' + DateHelper.zeroFill(date.getMonth() + 1)
            + '-' + DateHelper.zeroFill(date.getDate());
    }

    static zeroFill(i: number): string {
        return (i < 10 ? '0' : '') + i;
    }

    static getFormattedDate(date) {
        const year = date.year;
        const month = DateHelper.zeroFill(date.month);
        const day = DateHelper.zeroFill(date.day);
        console.log('getDate: ', `${year}-${month}-${day}`);
        return `${year}-${month}-${day}`;
    }
}
