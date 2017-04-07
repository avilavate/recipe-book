import { Directive, forwardRef, Attribute, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[disableAll]',
  inputs: ['isDisableAll']
})
export class DisableAllDirective {
  constructor(public elemenrtRef: ElementRef, public render: Renderer) { }

  set isDisableAll(value: boolean) {
    console.log(value);
    this.render.setElementClass(this.elemenrtRef.nativeElement, 'disabledbutton', value);
  }
}
