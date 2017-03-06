import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class RbDropdownDirective {
  isOpen: boolean = false;
  @HostListener("click") open() {
    console.log("Click called..");
    this.isOpen = true;
  }
  @HostListener("mouseleave") mouseleave($event) {
     console.log("Mouseleave called..");
    this.isOpen = false;
  }
  @HostBinding("class.open") get getIsOPened(){
    return this.isOpen;
  }
  @HostBinding("class.border") true
}
