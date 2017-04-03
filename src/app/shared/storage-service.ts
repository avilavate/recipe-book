import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import { Firebase_Init } from './init';

@Injectable()
export class StorageService {
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

    signUpUser(email: string, password: string) {
        this.firebase = Firebase_Init.Init();
        this.firebase.auth().createUserWithEmailAndPassword(email, password).
            then(
            data => { console.log("SignUp Complete: " + email + ": " + data); },
            error => { console.log("Signup Error!: " + error.message); }
            );
    }

    signInUser(emial: string, password: string) {
        this.firebase.auth().signInWithEmailAndPassword(emial, password).
            then(
            data => { console.log("Signin Done!"); },
            error => { console.log("Signin Error :" + error.message); }
            )
    }
}
