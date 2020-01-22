import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAIS8TdYcKA2xovyYoORj-gCSo-b5OD6TI",
    authDomain: "hackatonitc2020.firebaseapp.com",
    databaseURL: "https://hackatonitc2020.firebaseio.com",
    projectId: "hackatonitc2020",
    storageBucket: "hackatonitc2020.appspot.com",
    messagingSenderId: "407436951479",
    appId: "1:407436951479:web:8dc1ad396fc206b45b3232"
  };

  firebase.initializeApp(config);
firebase.analytics();

export default firebase