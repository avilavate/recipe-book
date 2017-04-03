import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

import { StorageService } from '../shared';
import { Router } from "@angular/router";

@Component({
  selector: 'rb-login-user',
  templateUrl: './login-user.component.html'
})
export class LoginUserComponent implements OnDestroy {
  ngOnDestroy(): void {
   this.tokenSubscription.unsubscribe();
  }
  isAuthenticatedUser: boolean = false;
  tokenSubscription: Subscription;
  constructor(private storageService: StorageService, private router: Router) {

    this.tokenSubscription = this.storageService.tokenObservable.subscribe(token => {
      this.isAuthenticatedUser = !!token;
      if (this.isAuthenticatedUser) this.router.navigate(["/"]);
    })

  }
  onLoginInUser(loginForm: NgForm) {
    console.dir(loginForm);
    if (loginForm.invalid) return;
    this.storageService.signInUser(loginForm.value.email,
      loginForm.value.password);
  }
}
