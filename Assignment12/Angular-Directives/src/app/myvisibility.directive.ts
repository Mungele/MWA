import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {

  @Input('appMyvisibility') visibility: boolean;
  constructor(private e: ElementRef) { }

  ngOnInit() {

    this.e.nativeElement.style.display = 'none';

    if (this.visibility) {
      this.e.nativeElement.style.display = 'block';
    }
  }
}
