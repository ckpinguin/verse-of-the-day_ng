import {Directive, ViewContainerRef, TemplateRef} from '@angular/core';
import {Input} from '@angular/core/src/metadata/directives';

@Directive({
    selector: '[ckRepeater]'
})
export class RepeaterDirective {
    constructor(private container: ViewContainerRef,
        private template: TemplateRef<any>) {
    }
    @Input('ckRepeater') set repeatIt(count: number) {
        this.container.clear();
        for (let i = 0; i < count; i++) {
            this.container.createEmbeddedView(this.template);
        }
    }
}
