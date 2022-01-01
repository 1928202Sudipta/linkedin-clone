import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAVU7NVY8h6zFYSkTwsHlsV_s7Bk9HQuZE",
    authDomain: "linkedinclone-8269.firebaseapp.com",
    projectId: "linkedinclone-8269",
    storageBucket: "linkedinclone-8269.appspot.com",
    messagingSenderId: "597744360945",
    appId: "1:597744360945:web:298aeec0d47355f2f7b850"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();

  export { db,auth };