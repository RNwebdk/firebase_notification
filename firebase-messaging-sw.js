importScripts('https://www.gstatic.com/firebasejs/3.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.4.0/firebase-messaging.js');

// Initialize Firebase
let config = {
	apiKey: "AIzaSyBneq2eTN_AaSuyU2Uasv3pHZx_k7b6HVk",
	authDomain: "staffz.firebaseapp.com",
	databaseURL: "https://staffz.firebaseio.com",
	projectId: "staffz",
	storageBucket: "staffz.appspot.com",
	messagingSenderId: "369121202475"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();