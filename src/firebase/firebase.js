import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4UXYqK1zlcBmrTwi8BCfK_Ashjd7luL0",
  authDomain: "expensify-c09ad.firebaseapp.com",
  databaseURL: "https://expensify-c09ad-default-rtdb.firebaseio.com",
  projectId: "expensify-c09ad",
  storageBucket: "expensify-c09ad.appspot.com",
  messagingSenderId: "967668925786",
  appId: "1:967668925786:web:f360cf4356520ca8299f63"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
database.ref().set({
  name: "Mohsen Pasdar",
  age: 34,
  isSingle: false,
  location: {
    city: 'Tehran',
    country: "Iran"
  }
});

// database.ref().set('This is my data');

database.ref('age').set(33);
database.ref('location/city').set("Toronto");
database.ref('location/country').set("Canada");
database.ref('attributes').set({
  height: 187,
  weight: 80
});

console.log('I made a request to change data');
