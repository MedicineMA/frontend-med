import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appDescriptionMarker]'
})
export class DescriptionMarkerDirective implements OnChanges {
  @Input('appDescriptionMarker') zoom?: number;

  constructor(private el: ElementRef) { }

  ngOnChanges(): void {
    const div = this.el.nativeElement as HTMLDivElement;

    if (this.zoom) {
      if (this.zoom >= 21) {
        div.style.fontSize = '16px';
      } if (this.zoom >= 14 && this.zoom <= 17) {
        div.style.fontSize = '12px';
      } if (this.zoom <= 14) {
        div.style.visibility = 'hidden';
      } else {
        div.style.visibility = 'visible';
      }
    }
  }

}
