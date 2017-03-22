import { Component, Input, Output, EventEmitter, OnChanges, ViewChild } from '@angular/core';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { DateHelper } from '../shared/date.helper';

@Component({
    selector: 'ck-navigator',
    templateUrl: './navigator.component.html',
    styleUrls: ['./navigator.component.styl']
})
export class NavigatorComponent implements OnChanges {
    // template variable variant:
    @ViewChild('datepicker') datePicker: DatePickerComponent;
    // class identifier variant:
    // @ViewChild(ImageViewComponent) imageView: ImageViewComponent;
    @Input() date: Date;
    @Output() dateChange = new EventEmitter();

    constructor() { }

    // called, whenever @Input binding changes
    ngOnChanges(changes) {
        // this.emitDateChange();
    }

    emitDateChange(date: Date) {
        console.log('emitting dateChange with: ', date);
        this.dateChange.emit(date);
    }

    changeDate(newDate: Date) {
        // console.log('changeDate called with: ', newDate);
        this.emitDateChange(newDate);
    }

}
