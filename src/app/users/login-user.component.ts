import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

import { StorageService } from '../shared';
import { Router } from "@angular/router";
import { ToastsManager } from "ng2-toastr/ng2-toastr";

@Component({
  selector: 'rb-login-user',
  templateUrl: './login-user.component.html'
})
export class LoginUserComponent implements OnDestroy {

  ngOnDestroy(): void {
    this.tokenSubscription.unsubscribe();
    this.messageSubscription.unsubscribe();  
}
  isAuthenticatedUser: boolean = false;
  tokenSubscription: Subscription;
  messageSubscription: Subscription;

  constructor(private storageService: StorageService, private router: Router, public toastr: ToastsManager, vRef: ViewContainerRef) {
    this.storageService.tokenObservable.next('');
    this.tokenSubscription = this.storageService.tokenObservable.subscribe(token => {
      this.isAuthenticatedUser = !!token;
      if (this.isAuthenticatedUser) this.router.navigate(["/recipe-list"]);
    })
    this.toastr.setRootViewContainerRef(vRef);
    this.messageSubscription = this.storageService.responseMessage.subscribe(res => {
      res.isSuccess ? this.toastr.info(res.message) : this.toastr.error(res.message);
    });
  }
  onLoginInUser(loginForm: NgForm) {
    if (loginForm.invalid) return;
    this.storageService.signInUser(loginForm.value.email, loginForm.value.password);
  }
  onUserSignUp() {
    this.storageService.signOutUSer();
    this.router.navigate(['signup']);
  }
}
