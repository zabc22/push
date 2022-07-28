importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyC25vjWThs566qp5CYsKlNatbS6BuSLUDw",
    authDomain: "zabc-push.firebaseapp.com",
    projectId: "zabc-push",
    storageBucket: "zabc-push.appspot.com",
    messagingSenderId: "960225099205",
    appId: "1:960225099205:web:16bceffde1df8193e15fac",
    measurementId: "G-7GM2NZGE67"
  };

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});