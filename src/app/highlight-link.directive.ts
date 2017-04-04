import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbHighlightLink]'
})
export class HighlightLinkDirective {

  isActive: boolean = false;
  @HostListener("click") open() {
    this.isActive = true;
  }
  @HostListener("mouseleave") mouseleave($event) {
    this.isActive = false;
  }
  @HostListener("mouseenter") mouseenter($event) {
    this.isActive = true;
  }
  @HostBinding("class.active") get getisActiveed() {
    return this.isActive;
  }
}
