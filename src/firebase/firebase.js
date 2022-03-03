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

export { firebase, database as default };





// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   }
// );
//
// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   }, (e) => {
//     console.log('Error fetching data:', e);
//   });

// database.ref('expenses').push({
//   descriptiom: 'Rent',
//   note: 'January',
//   amount: 123,
//   createdAt: 4512
// });





//
// database.ref().on('value', (snapshot) => {
//   console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}.`);
// }, (e) => {
//   console.log('Error fetching data', e);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with fetching data', e);
// });
//
// setTimeout(() => {
//   database.ref('age').set(37);
// }, 3500);
//
// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 7000);
//
// setTimeout(() => {
//   database.ref('age').set(39);
// }, 10500);

  // database.ref('location/city')
  //   .once('value')
  //   .then((snapshot) => {
  //     const val = snapshot.val();
  //     console.log(val);
  //   })
  //   .catch((e) => {
  //     console.log('Error fetching data', e);
  //   });

// database.ref().set({
//   name: "Mohsen Pasdar",
//   age: 34,
//   stressLevel: 6,
//   job: {
//     title: 'engineer',
//     company: 'ripi'
//   },
//   location: {
//     city: 'Tehran',
//     country: "Iran"
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('this failed', e );
// });
//
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'facebook',
//   'location/city': 'Seattle'
// });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('remove succeed');
//   })
//   .catch((e) => {
//     console.log('remove failed', e);
//   }
// );
