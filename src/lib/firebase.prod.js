import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this! - just doing this once
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDkb5eOH65n2LWHLr1ZYVMCSkmHaGWH9no",
  authDomain: "netflix-clone-d714d.firebaseapp.com",
  databaseURL: "https://netflix-clone-d714d.firebaseio.com",
  projectId: "netflix-clone-d714d",
  storageBucket: "netflix-clone-d714d.appspot.com",
  messagingSenderId: "271511651981",
  appId: "1:271511651981:web:e250485dc2398a4c2f04c4"
};

const firebase = Firebase.initializeApp(config);

export { firebase };