import { Component } from '@angular/core';

@Component({
    selector: 'ck-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl']
})
export class AppComponent {
    title = 'Verse of the day';

    date = this.formatDate(this.randomDate(new Date(2014, 0, 1), new Date()));
    url = 'http://logos.com/media/VerseOfTheDay/768x432/' + this.date + '.png';

    randomDate(start: Date, end: Date): Date {
        return new Date(start.getTime()
            + Math.random() * (end.getTime() - start.getTime()));
    }
    formatDate(date: Date): string {
        return date.getFullYear() + '-' + this.zerofill(date.getMonth() + 1) + '-' + this.zerofill(date.getDate());
    }
    zerofill(i: number): string {
        return (i < 10 ? '0' : '') + i;
    }

}
