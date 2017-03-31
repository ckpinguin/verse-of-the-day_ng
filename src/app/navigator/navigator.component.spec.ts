import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorComponent } from './navigator.component';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { DateHelper } from '../shared/date.helper';

describe('NavigatorComponent', () => {
  let navigator: NavigatorComponent;
  let fixture: ComponentFixture<NavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigatorComponent, DatePickerComponent ]
    })
    .compileComponents();
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
});
