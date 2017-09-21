import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {
  colors: string[] = ['red', 'yellow' , 'green', 'blue', 'black' , 'purple'];
  index: number = 0;
  @Output() emitter = new EventEmitter();
  constructor(private e: ElementRef) { }

  @HostListener('click') onMouseClick() {
    //changing the element colour
    this.e.nativeElement.style.backgroundColor = this.colors[this.index];
    //emitting the colour to parent
    this.emitter.emit(this.colors[this.index]);
    // changing the colour array position
    this.index = (this.index + 1) % this.colors.length;
  }
}
