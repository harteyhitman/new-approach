import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDOegjbJaulhEPRki-BaTR-aqU1layjn6o",
    authDomain: "my-firebase-project-9581e.firebaseapp.com",
    projectId: "my-firebase-project-9581e",
    storageBucket: "my-firebase-project-9581e.appspot.com",
    messagingSenderId: "46051953298",
    appId: "1:46051953298:web:96df1c2412f410be14b44b",
    measurementId: "G-T8PST4V872"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
