import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBUoP7eLDUrUSJ_wr-RblMiOp5PdFIJl78',
  authDomain: 'music-app-5c31b.firebaseapp.com',
  projectId: 'music-app-5c31b',
  storageBucket: 'music-app-5c31b.appspot.com',
  appId: '1:677653537688:web:81d5c08e5dd91a514a01ed',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  storage,
  usersCollection,
  songsCollection,
  commentsCollection,
};
