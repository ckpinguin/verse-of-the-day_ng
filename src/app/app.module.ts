import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ImageViewComponent } from './image-view/image-view.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

@NgModule({
    declarations: [
        AppComponent,
        ImageViewComponent,
        NavigatorComponent,
        DatePickerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
    ],
    providers: [],
    entryComponents: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
