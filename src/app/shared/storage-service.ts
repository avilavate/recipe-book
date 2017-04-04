import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import { Firebase_Init } from './init';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class StorageService {
    tokenObservable: Subject<string> = new Subject();
    firebase: firebase.app.App;
    constructor() {
        let config = {
            apiKey: "AIzaSyDx3b3Bff7dkPqznoyytJci4ZiVk6DMR5M",
            authDomain: "recipe-book-264a0.firebaseapp.com",
            databaseURL: "https://recipe-book-264a0.firebaseio.com",
            projectId: "recipe-book-264a0",
            storageBucket: "recipe-book-264a0.appspot.com",
            messagingSenderId: "1076358813978"
        };
        this.firebase = firebase.initializeApp(config);
    }

    getUserName(): Subject<string> {
        let userEmail: Subject<string>= new Subject<string>();
        this.tokenObservable.subscribe(token => {
            if (!!token) { userEmail.next(this.firebase.auth().currentUser.email); }
        })
        return userEmail;
    }

    signUpUser(email: string, password: string) {
        this.firebase = Firebase_Init.Init();
        this.firebase.auth().createUserWithEmailAndPassword(email, password).
            then(
            data => { console.log("SignUp Complete: " + email + ": " + data); },
            error => { console.log("Signup Error!: " + error.message); }
            );
    }
    isAuthenticated() {
        if (this.firebase.auth().currentUser == null) {
            console.log("Token is null");
            this.tokenObservable.next("");
            return;
        }
        this.firebase.auth().currentUser.getToken().then(
            token => {
                this.tokenObservable.next(token);
                console.log("Token: " + token);
            },
            error => { console.log(error.message); }
        );
    }

    signInUser(emial: string, password: string) {
        this.firebase.auth().signInWithEmailAndPassword(emial, password).
            then(
            data => {
                console.log("Signin Done!");
                this.isAuthenticated();
            },
            error => { console.log("Signin Error :" + error.message); }
            )
    }

    signOutUSer() {
        this.firebase.auth().signOut();
        this.tokenObservable.next('');
    }
}
