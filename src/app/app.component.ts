import { Component, ViewChild, OnInit } from '@angular/core';
import { DateHelper } from './shared/date.helper';

@Component({
    selector: 'ck-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl'],
})
export class AppComponent implements OnInit {
    title = 'Verse of the day';
    date: Date;
    urlBase = 'https://logos.com/media/VerseOfTheDay/768x432/';
    url: string;

    // use constructor only for DI
    constructor() {
        // this.date = DateHelper.getRandomDate();
        // const formattedDate = DateHelper.formatDate(this.date);
        // this.url = this.urlBase + formattedDate + '.png';
    }

    ngOnInit() {
        this.date = DateHelper.getRandomDate();
        const formattedDate = DateHelper.formatDate(this.date);
        this.url = this.urlBase + formattedDate + '.png';
    }

    changeDate(newDate: Date) {
        console.log('changeDate called with: ', newDate);
        this.date = newDate;
        const formattedDate = DateHelper.formatDate(this.date);
        this.updateUrl(formattedDate);
    }

    private updateUrl(formattedDate: string) {
        this.url = this.urlBase + formattedDate + '.png';
    }
}
