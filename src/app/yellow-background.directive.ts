import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appYellowBackground]'
})
export class YellowBackgroundDirective {

  constructor(public eleref: ElementRef) { 
    this.eleref.nativeElement.style.backgroundColor = 'yellow';
  }

}
