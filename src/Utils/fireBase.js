// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByE57lrWSxS5LbJR6o1LQzPOAoVlWCyf4",
  authDomain: "netflix-gpt-3e062.firebaseapp.com",
  projectId: "netflix-gpt-3e062",
  storageBucket: "netflix-gpt-3e062.appspot.com",
  messagingSenderId: "636632923024",
  appId: "1:636632923024:web:2d8fe534d84f1e41885115",
  measurementId: "G-1522ZQ421Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// console.log(analytics);
 export const auth = getAuth();