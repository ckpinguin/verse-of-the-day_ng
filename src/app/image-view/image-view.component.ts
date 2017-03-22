import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
    selector: 'ck-image-view',
    templateUrl: './image-view.component.html',
    styleUrls: ['./image-view.component.styl']
})
export class ImageViewComponent implements OnInit, OnChanges {
    @Input() url: String;

    constructor() { }

    ngOnInit() {
        //this.imgUrl = 'http://logos.com/media/VerseOfTheDay/768x432/2016-12-27.png';
    }

    // called, whenever @Input binding changes
    ngOnChanges(changes) {

    }

}
