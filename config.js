import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDnqatbq39lthojsUXYhW8TtZpwpODALfw",
  authDomain: "e-ride-bed32.firebaseapp.com",
  projectId: "e-ride-bed32",
  storageBucket: "e-ride-bed32.appspot.com",
  messagingSenderId: "218791012969",
  appId: "1:218791012969:web:1092311f00705927b990f8"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
