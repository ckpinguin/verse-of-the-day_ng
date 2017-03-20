import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ViewChild } from '@angular/core';
import { DateHelper } from '../shared/date.helper';

@Component({
    selector: 'ck-date-picker',
    templateUrl: './date-picker.component.html',
    styleUrls: ['./date-picker.component.styl']
})
export class DatePickerComponent implements OnChanges {
    date: any;
    @Input('date') dateString = '';
    @Output() dateChange = new EventEmitter();

    constructor() {
        this.reset();
    }

    // called, whenever @Input binding changes
    ngOnChanges(changes) {
        const parts = this.dateString.split('.');
        if (parts.length === 3) {
            this.date = {
                year: Math.min(parseInt(parts[0], 10), DateHelper.maxValues.year),
                month: Math.min(parseInt(parts[1], 10), DateHelper.maxValues.month),
                day: Math.min(parseInt(parts[2], 10), DateHelper.maxValues.day)
            };
        }
    }

    incrementDate(field: string) {
        const maxValue = DateHelper.maxValues[field];
        const minValue = DateHelper.minValues[field];
        this.date[field] = (this.date[field] + 1 > maxValue)
            ? minValue
            : this.date[field] + 1;
        this.emitDateChange();
    }

    decrementDate(field: string) {
        const maxValue = DateHelper.maxValues[field];
        const minValue = DateHelper.minValues[field];
        this.date[field] = (this.date[field] - 1 < minValue)
            ? maxValue
            : this.date[field] - 1;
        this.emitDateChange();
    }

    private reset() {
        this.date = {
            year: DateHelper.minValues['year'],
            month: DateHelper.minValues['month'],
            day: DateHelper.minValues['day']
        };
        this.emitDateChange();
    }

    emitDateChange() {
        this.dateChange.emit(DateHelper.getFormattedDate(this.date));
    }

    changeDate(field: string, inputValue) {
        let value = Math.max(inputValue, 0);
        value = Math.min(value, DateHelper.maxValues[field]);
        console.log('changing ', field, ' to: ', value);
        this.date[field] = value;
        this.emitDateChange();
    }


}
