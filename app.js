// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBneq2eTN_AaSuyU2Uasv3pHZx_k7b6HVk",
    authDomain: "staffz.firebaseapp.com",
    databaseURL: "https://staffz.firebaseio.com",
    projectId: "staffz",
    storageBucket: "staffz.appspot.com",
    messagingSenderId: "369121202475"
  };
  firebase.initializeApp(config);

  const messaging = firebase.messaging();
  //request to see if we have permission from the user to send them push notifications
  //if we have the permission, we get a token
  	//when we get the token, 
  //else we get an error
  messaging.requestPermission()
  .then(function(){
  	console.log('Have permission');
  	return messaging.getToken();
  })
  .then(function(token){
  	console.log(token);
  })
  .catch(function(err){
  	console.log('Error Occured');
  });


  //if the user has the app open, it would make sence to send the message directly instead of a notification
  //you can do whatever you want with the payload (Show popup message ect.)
  messaging.onMessage(function(payload){
  	console.log('onMessage: ', payload);
  });