import { Component, OnInit, OnChanges, AfterViewInit, ViewChild } from '@angular/core';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { ImageViewComponent } from '../image-view/image-view.component';
import { DateHelper } from '../shared/date.helper';

@Component({
    selector: 'ck-navigator',
    templateUrl: './navigator.component.html',
    styleUrls: ['./navigator.component.styl']
})
export class NavigatorComponent implements OnInit, OnChanges, AfterViewInit {
    // template variable variant:
    @ViewChild('datepicker') datePicker: DatePickerComponent;
    // class identifier variant:
    @ViewChild(ImageViewComponent) imageView: ImageViewComponent;

    randomDate = DateHelper.randomDate(
        new Date(
            DateHelper.minValues['year'],
            DateHelper.minValues['month'],
            DateHelper.minValues['day']
        ),
        new Date());
    date = DateHelper.formatDate(this.randomDate);
    url = 'http://logos.com/media/VerseOfTheDay/768x432/' + this.date + '.png';

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges() {

    }

    ngAfterViewInit() {
        console.log('DatePicker: ', this.datePicker);
    }
}
