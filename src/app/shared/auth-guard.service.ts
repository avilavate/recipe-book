import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
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
  constructor(public storageService: StorageService) {
    this.tokenSubscripton = this.storageService.tokenObservable.subscribe(token => {
      this.tokenPresent = (!!token) ? true : false;
    })
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | Observable<boolean> | Promise<boolean> {
    return this.tokenPresent;
  }
}

