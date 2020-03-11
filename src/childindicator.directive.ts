import { Directive ,ElementRef,Renderer2} from '@angular/core';

@Directive({
  selector: '[appChildindicator]'
})
export class ChildindicatorDirective {

  constructor(private el:ElementRef) { }

  public getElRef()
  {
    return this.el;
  }
}