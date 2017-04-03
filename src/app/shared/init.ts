import * as firebase from 'firebase/app';

// Initialize default app
// Retrieve your own options values by adding a web app on
// https://console.firebase.google.com
export class Firebase_Init {
    static Init(): firebase.app.App {
        let config = {
            apiKey: "AIzaSyDx3b3Bff7dkPqznoyytJci4ZiVk6DMR5M",
            authDomain: "recipe-book-264a0.firebaseapp.com",
            databaseURL: "https://recipe-book-264a0.firebaseio.com",
            projectId: "recipe-book-264a0",
            storageBucket: "recipe-book-264a0.appspot.com",
            messagingSenderId: "1076358813978"
        };
        return firebase.initializeApp(config)
    }

}