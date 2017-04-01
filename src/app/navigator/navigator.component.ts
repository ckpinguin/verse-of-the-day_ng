import {Component, Input, Output, EventEmitter, HostListener, OnChanges} from '@angular/core';
import {DatePickerComponent} from '../date-picker/date-picker.component';
import {DateHelper} from '../shared/date.helper';

@Component({
    selector: 'ck-navigator',
    templateUrl: './navigator.component.html',
    styleUrls: ['./navigator.component.styl'
]})
export class NavigatorComponent {
    @Input()date: Date;
    @Output()dateChange = new EventEmitter();
    @HostListener('window:keydown', ['$event']) onKeyDown(e: KeyboardEvent) {
        console.log(`Pressed ${e.key}!`);
        if (e.key === 'ArrowRight') {
            this.incrementDate();
        } else if (e.key === 'ArrowLeft') {
            this.decrementDate();
        }
    };

    constructor() {}

    emitDateChange(date: Date) {
        console.log('emitting dateChange with: ', date);
        this.dateChange.emit(date);
    }

    incrementDate() {
        const newDate = new Date(this.date.getTime() + 86400000); // msecs here
        console.log('incrementDate: ', newDate);
        this.changeDate(newDate);
    }

    decrementDate() {
        const newDate = new Date(this.date.getTime() - 86400000);
        console.log('decrementDate: ', newDate);
        this.changeDate(newDate);
    }

    changeDate(newDate: Date) {
        // console.log('changeDate called with: ', newDate);
        this.emitDateChange(newDate);
    }

}
