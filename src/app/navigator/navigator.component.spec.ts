import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { BehaviorSubject } from 'rxjs/Rx';

import {NavigatorComponent} from './navigator.component';
import {DatePickerComponent} from '../date-picker/date-picker.component';
import {DateHelper} from '../shared/date.helper';

describe('NavigatorComponent', () => {
    let navigator: NavigatorComponent;
    let fixture: ComponentFixture < NavigatorComponent >;

    beforeEach(async(() => {
      TestBed
          .configureTestingModule({
          declarations: [NavigatorComponent, DatePickerComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavigatorComponent);
        navigator = fixture.componentInstance;
        navigator.date = DateHelper.getRandomDate(); // Mock input date
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(navigator).toBeTruthy();
    });

    it('should decrement date correctly', () => {
        const dateBefore = navigator.date;
        navigator.decrementDate();
        expect(navigator.date.getTime()).toBe(dateBefore.getTime() - 86400)
    });

    it('should increment date correctly', () => {
        const dateBefore = navigator.date;
        const spy = spyOn(navigator, 'incrementDate');
        spy.and.returnValue(new BehaviorSubject<any>({}));
        navigator.incrementDate();
        const args = spy.calls.mostRecent().args;
        expect(args).toBe(dateBefore.getTime() + 86400);
    });

});
