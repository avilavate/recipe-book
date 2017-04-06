import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

import { StorageService } from './shared';
import { Router } from "@angular/router";
import { Subject } from "rxjs/Subject";

@Component({
  selector: 'rb-recipe-root',
  templateUrl: './recipe-root.component.html',
})
export class RecipeRootComponent implements OnDestroy {
  ngOnDestroy(): void {
    this.tokenSubsription.unsubscribe();
    this.userMailSubscription.unsubscribe();
  }
  
  userToken: string;
  tokenSubsription: Subscription;
  userMailSubscription:Subscription;
  userEmail: string;
  constructor(private storageService: StorageService, private router: Router) {
    this.storageService.isAuthenticated();
    this.tokenSubsription = this.storageService.tokenObservable.subscribe(token => {
      this.userToken = token;
    });
    this.storageService.getUserName().subscribe(email=>{this.userEmail=email;});
  }
  signOutUser() {
    this.storageService.signOutUSer();
    this.storageService.tokenObservable.next("");
    this.router.navigate(["signin"]);
  }
}
