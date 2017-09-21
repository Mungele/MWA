import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  constructor( private el: ElementRef) {
  el.nativeElement.style.textTransform = 'uppercase';
  }

}
