import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

import { StorageService } from '../shared';
import { Router } from "@angular/router";

@Component({
  selector: 'rb-signup-user',
  templateUrl: './signup-user.component.html'
})
export class SignupUserComponent {


  constructor(private storageService: StorageService, public router: Router) { }
  onSubmit(form: NgForm) {
    if (form.invalid) return;
    let email = form.value.email;
    let password = form.value.password;

    this.storageService.signUpUser(email, password).then(() => {
      console.log(email + "account created.");
      this.router.navigate(['/signin']);
    }, (error) => {
      console.log(error.message);
      form.reset();
    });
  }
}
