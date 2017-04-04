import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

import { StorageService } from '../shared';
import { Router } from "@angular/router";

@Component({
  selector: 'rb-signup-user',
  templateUrl: './signup-user.component.html',
  styles: []
})
export class SignupUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
