import {TestBed, ComponentFixture, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {AppComponent} from './app.component';
import {ImageViewComponent} from './image-view/image-view.component';
import {NavigatorComponent} from './navigator/navigator.component';
import {DatePickerComponent} from './date-picker/date-picker.component';
import { DateHelper } from './shared/date.helper';

describe('AppComponent', () => {
    let app: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AppComponent, NavigatorComponent, DatePickerComponent, ImageViewComponent]
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
        app.date = DateHelper.getRandomDate(); // Mock date
        fixture.detectChanges();
    });

    it('should create the app', async(() => {
        expect(app).toBeTruthy();
    }));

    it(`should have as title 'Verse of the day'`, async(() => {
        expect(app.title).toEqual('Verse of the day');
    }));

    it('should render title in a h1 tag', async(() => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Verse of the day');
    }));

    it('should initially create a random `date` between 2014-01-01 and today', async(() => {
        const minDate = new Date(
            DateHelper.minValues['year'],
            DateHelper.minValues['month'],
            DateHelper.minValues['day']);
        const maxDate = new Date(
            DateHelper.maxValues['year'],
            DateHelper.maxValues['month'],
            DateHelper.maxValues['day']
        );

        expect(app.date.getTime()).toBeGreaterThan(minDate.getTime());
        expect(app.date.getTime()).toBeLessThan(maxDate.getTime());
    }));

});
