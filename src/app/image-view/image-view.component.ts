import { Component, Input, OnInit, } from '@angular/core';

@Component({
    selector: 'ck-image-view',
    templateUrl: './image-view.component.html',
    styleUrls: ['./image-view.component.styl']
})
export class ImageViewComponent implements OnInit {
    @Input() imgUrl: String;

    constructor() { }

    ngOnInit() {
        //console.log('url: ' + this.imgUrl);
    }

}
