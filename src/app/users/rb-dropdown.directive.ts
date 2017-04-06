import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class RbDropdownDirective {
  isOpen: boolean = false;
  @HostListener("click") open() {
    this.isOpen = true;
  }
  @HostListener("mouseleave") mouseleave($event) {
    this.isOpen = false;
  }
  @HostListener("mouseenter") mouseenter($event) {
    this.isOpen = true;
  }
  @HostBinding("class.open") get getIsOPened() {
    return this.isOpen;
  }
}
