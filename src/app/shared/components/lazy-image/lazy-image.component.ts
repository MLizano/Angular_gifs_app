import { Component, Input } from '@angular/core';

@Component({
    selector: 'shared-lazy-image',
    templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent {
    ngOnInit(): void {
        if (!this.url) {
            throw new Error('Attribute URL is required');
        }
    }

    @Input()
    public url!: string;

    @Input()
    public alt: string = 'Image';

    public hasLoaded: boolean = false;

    public onLoad() {
        this.hasLoaded = true;
    }
}
