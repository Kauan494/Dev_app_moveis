import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyABCO9rZXsGD5KPBjZl5HAFFAhk5tcGC1c",
  authDomain: "lab09-restaurante-4e151.firebaseapp.com",
  projectId: "lab09-restaurante-4e151",
  storageBucket: "lab09-restaurante-4e151.firebasestorage.app",
  messagingSenderId: "1077018058167",
  appId: "1:1077018058167:web:87d426eeb5130e77109c32",
  databaseURL: "https://lab09-restaurante-4e151-default-rtdb.firebaseio.com/"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;