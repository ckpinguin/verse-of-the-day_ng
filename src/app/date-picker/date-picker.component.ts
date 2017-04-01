import { Component, Input, Output, EventEmitter, OnChanges, ViewChild } from '@angular/core';
import { DateHelper } from '../shared/date.helper';

@Component({
    selector: 'ck-date-picker',
    templateUrl: './date-picker.component.html',
    styleUrls: ['./date-picker.component.styl']
})
export class DatePickerComponent implements OnChanges {
    formDate: any; // no model, just display stuff
    @Input() date: Date;
    @Output() dateChange = new EventEmitter();

    constructor() {
    }

    // This is the "bottom receiver" component for date, so we want to react on data change here
    // ngOnChanges is called, whenever @Input binding changes and also onViewInit
    // ...we update the form then
    ngOnChanges(changes) {
        const formattedDate = DateHelper.formatDate(this.date);
        const parts = formattedDate.split('-');
        if (parts.length === 3) {
            this.formDate = {
                year: Math.min(parseInt(parts[0], 10), DateHelper.maxValues.year),
                month: Math.min(parseInt(parts[1], 10), DateHelper.maxValues.month),
                day: Math.min(parseInt(parts[2], 10), DateHelper.maxValues.day)
            };
        }
    }

    incrementField(field: string) {
        const maxValue = DateHelper.maxValues[field];
        const minValue = DateHelper.minValues[field];
        this.formDate[field] = (this.formDate[field] + 1 > maxValue)
            ? minValue
            : this.formDate[field] + 1;
        this.emitDateChange();
    }

    decrementField(field: string) {
        const maxValue = DateHelper.maxValues[field];
        const minValue = DateHelper.minValues[field];
        this.formDate[field] = (this.formDate[field] - 1 < minValue)
            ? maxValue
            : this.formDate[field] - 1;
        this.emitDateChange();
    }

    private reset() {
        this.formDate = {
            year: DateHelper.minValues['year'],
            month: DateHelper.minValues['month'],
            day: DateHelper.minValues['day']
        };
        this.emitDateChange();
    }

    emitDateChange() {
        const date = new Date(this.formDate.year, this.formDate.month - 1, this.formDate.day);
        // console.log('emitting dateChange with: ', date);
        this.dateChange.emit(date);
    }

    changeDate(field: string, inputValue) {
        let value = Math.max(inputValue, 0);
        value = Math.min(value, DateHelper.maxValues[field]);
        // console.log('changing ', field, ' to: ', value);
        this.formDate[field] = value;
        this.emitDateChange();
    }


}
