import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

import { StorageService } from '../shared';
import { Router } from "@angular/router";
import { ToastsManager } from "ng2-toastr/ng2-toastr";
import { StorageBlobService } from "app/shared/storage-blob.service";

@Component({
  selector: 'rb-login-user',
  templateUrl: './login-user.component.html'
})
export class LoginUserComponent implements OnDestroy {

  ngOnDestroy(): void {
    this.tokenSubscription.unsubscribe();
    this.messageSubscription.unsubscribe();
  }
  tokenSubscription: Subscription;
  messageSubscription: Subscription;

  constructor(
    private storageService: StorageService,
    private router: Router,
    public toastr: ToastsManager,
    private vRef: ViewContainerRef,
    public storageBlobService: StorageBlobService) {
    this.storageService.tokenObservable.next('');
    this.tokenSubscription = this.storageService.tokenObservable.subscribe(token => {
      if (!!token) this.router.navigate(["/home"]);
    })
    this.toastr.setRootViewContainerRef(vRef);
    this.messageSubscription = this.storageService.responseMessage.subscribe(res => {
      res.isSuccess ? this.toastr.info(res.message) : this.toastr.error(res.message);
    });
  }
  onLoginInUser(loginForm: NgForm) {
    //Todo: Only for tetsing remove later
    console.log(this.storageBlobService.getBlobUrl());
    if (loginForm.invalid) return;
    this.storageService.signInUser(loginForm.value.email, loginForm.value.password);
  }
  onUserSignUp() {
    this.storageService.signOutUSer();
    this.router.navigate(['signup']);
  }
}
