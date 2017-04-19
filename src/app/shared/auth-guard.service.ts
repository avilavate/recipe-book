import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from "rxjs/Observable";

import { StorageService } from "./storage-service";
import { Subject } from "rxjs/Subject";
import { Subscription } from "rxjs/Subscription";
import 'rxjs/add/operator/map';


@Injectable()
export class AuthGuardService implements CanActivate, OnDestroy {
  ngOnDestroy(): void {
    this.tokenSubscripton.unsubscribe();
  }

  tokenSubscripton: Subscription;
  tokenPresent: boolean;
  constructor(public storageService: StorageService, private router: Router) {
    this.tokenSubscripton = this.storageService.tokenObservable.subscribe(token => {
      this.tokenPresent = (!!token) ? true : false;
    })
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | Observable<boolean> | Promise<boolean> {
    this.storageService.isAuthenticated();
    if (this.tokenPresent) {
      return true;
    }
    else this.router.navigate(['/signin']);
    return false;
  }
}

