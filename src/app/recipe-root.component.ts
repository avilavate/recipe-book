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
  }

  userToken: string;
  tokenSubsription: Subscription;
  userEmail: Subject<string>;
  constructor(private storageService: StorageService, private router: Router) {
    this.storageService.isAuthenticated();
    this.tokenSubsription = this.storageService.tokenObservable.subscribe(token => {
      this.userToken = token;
    });
    this.userEmail = this.storageService.getUserName();
    this.userEmail.subscribe((em => { console.log(em) }));
  }
  signOutUser() {
    this.storageService.signOutUSer();
    this.router.navigate(["signin"]);
  }
}
