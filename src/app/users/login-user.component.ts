import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { StorageService } from '../shared';

@Component({
  selector: 'rb-login-user',
  templateUrl: './login-user.component.html'
})
export class LoginUserComponent {
  constructor(private storageService: StorageService) { }
  onLoginInUser(loginForm: NgForm) {
    console.dir(loginForm);
    if (loginForm.invalid) return;
    this.storageService.signInUser(loginForm.value.email,
      loginForm.value.password);
  }
}
