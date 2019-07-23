import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMagnifier]'
})
export class MagnifierDirective {
  @Input("appMagnifier") zoomEm: string;
  constructor(private el: ElementRef) {}

  @HostListener('click') onHostClick() {
    this.el.nativeElement.style.fontSize = this.zoomEm + "em";
  }

}
