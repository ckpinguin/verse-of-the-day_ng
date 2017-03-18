import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ImageViewComponent } from './image-view/image-view.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { RepeaterDirective } from './repeater/repeater.directive';
@NgModule({
    declarations: [
        AppComponent,
        ImageViewComponent,
        NavigatorComponent,
        RepeaterDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [],
    entryComponents: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
