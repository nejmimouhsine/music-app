import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCb6-XI3GDaBoIZb-qNId8R8SF5wpE2jRQ',
  authDomain: 'music-app-51987.firebaseapp.com',
  projectId: 'music-app-51987',
  storageBucket: 'music-app-51987.appspot.com',
  messagingSenderId: '978829240364',
  appId: '1:978829240364:web:9a1ce899fed5a5d32c8989',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

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
