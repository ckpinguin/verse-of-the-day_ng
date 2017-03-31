import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerComponent } from './date-picker.component';

import { DateHelper } from '../shared/date.helper';

describe('DatePickerComponent', () => {
  let datePicker: DatePickerComponent;
  let fixture: ComponentFixture<DatePickerComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [DatePickerComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerComponent);
    datePicker = fixture.componentInstance;
    datePicker.date = DateHelper.getRandomDate(); // Mock input date
    datePicker.ngOnChanges(null);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(datePicker).toBeTruthy();
  });

  it('can increment day field', () => {
    // expect()
  });

});
