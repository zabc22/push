// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC25vjWThs566qp5CYsKlNatbS6BuSLUDw",
  authDomain: "zabc-push.firebaseapp.com",
  projectId: "zabc-push",
  storageBucket: "zabc-push.appspot.com",
  messagingSenderId: "960225099205",
  appId: "1:960225099205:web:16bceffde1df8193e15fac",
  measurementId: "G-7GM2NZGE67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
const analytics = getAnalytics(app);

export const fetchToken = (setTokenFound) => {
    return getToken(messaging, {vapidKey: 'BMpxciNPvBFaAubLLZDAZdnJ6TeFDIEQ1a_qiXZPKmJtweggfF7ye557rhqRAieQhTgFnq34u8x6ospqGIsWgBc'}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  }
  
  export const onMessageListener = () =>
    new Promise((resolve) => {
      onMessage(messaging, (payload) => {
        resolve(payload);
      });
  });