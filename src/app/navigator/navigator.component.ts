import {Component, Input, Output, OnInit, EventEmitter, HostListener, OnChanges} from '@angular/core';
import {DatePickerComponent} from '../date-picker/date-picker.component';
import {DateHelper} from '../shared/date.helper';

import {Subscription} from 'rxjs/Subscription';
import {TimerObservable} from 'rxjs/observable/TimerObservable';

@Component({
    selector: 'ck-navigator',
    templateUrl: './navigator.component.html',
    styleUrls: ['./navigator.component.styl'
]})
export class NavigatorComponent implements OnInit {
    private slideShowOn: boolean = false;
    private subscription: Subscription;

    @Input()date: Date;
    @Output()dateChange = new EventEmitter();
    // Listen globally and act locally for arrow keys pressed
    @HostListener('window:keydown', ['$event']) onKeyDown(e: KeyboardEvent) {
        console.log(`Pressed ${e.key}!`);
        if (e.key === 'ArrowRight') {
            this.incrementDate();
        } else if (e.key === 'ArrowLeft') {
            this.decrementDate();
        }
    };

    constructor() {}

    ngOnInit() {
        this.slideShowOn = false;
    }

    emitDateChange(date: Date): void {
        console.log('emitting dateChange with: ', date);
        this.dateChange.emit(date);
    }

    incrementDate(): void {
        const newDate = new Date(this.date.getTime() + 86400000); // msecs here
        console.log('incrementDate: ', newDate);
        this.changeDate(newDate);
    }

    decrementDate(): void {
        const newDate = new Date(this.date.getTime() - 86400000);
        console.log('decrementDate: ', newDate);
        this.changeDate(newDate);
    }

    randomizeDate(): void {
        const newDate = DateHelper.getRandomDate();
        this.changeDate(newDate);
    }

    toggleSlideShow(): void {
        if (!this.slideShowOn) {
            this.startSlideShow();
            this.slideShowOn = true;
        } else if (this.slideShowOn) {
            this.slideShowOn = false;
        }
    }

    startSlideShow(): void {
        const timer = TimerObservable.create(2000, 10000);
        this.subscription = timer.subscribe(t => {
            if (this.slideShowOn) {
                this.randomizeDate();
            }
        });
    }

    changeDate(newDate: Date): void {
        // console.log('changeDate called with: ', newDate);
        this.emitDateChange(newDate);
    }

}
