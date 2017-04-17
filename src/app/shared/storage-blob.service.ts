import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

import { StorageService } from "app/shared";

@Injectable()
export class StorageBlobService {
  constructor(public storageService: StorageService) {
  }
  getBlobUrl(): string {
    return "this.firebase.storage().ref(): " + this.storageService.firebase.storage().ref();
  }
}
