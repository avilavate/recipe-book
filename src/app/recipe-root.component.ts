import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

import { StorageService } from './shared';

@Component({
  selector: 'rb-recipe-root',
  templateUrl: './recipe-root.component.html',
})
export class RecipeRootComponent implements OnDestroy {
  ngOnDestroy(): void {
    this.tokenSubsription.unsubscribe();
  }

  userToken: string;
  tokenSubsription: Subscription;

  constructor(private storageService: StorageService) {
    this.storageService.isAuthenticated();
    this.tokenSubsription = this.storageService.tokenObservable.subscribe(token => {
      this.userToken = token;
      console.log("Token: " + this.userToken);
    })
  }
  signOutUser(){
    this.storageService.signOutUSer();
  }
}
