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
  @HostBinding("class.open") get getIsOPened(){
    return this.isOpen;
  }
  @HostBinding("class.border") true
}
