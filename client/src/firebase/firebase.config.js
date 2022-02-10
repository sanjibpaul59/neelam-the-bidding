import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyADjnjTEaAU5dKfBjqyEyhmgr4bzoMA52M',
    authDomain: 'bidding-app-179f0.firebaseapp.com',
    projectId: 'bidding-app-179f0',
    storageBucket: 'bidding-app-179f0.appspot.com',
    messagingSenderId: '612840065749',
    appId: '1:612840065749:web:d099f62a75c3975317305c',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }