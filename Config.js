import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
  apiKey: "AIzaSyBEcfb59vypHZ2isiqgKRYtdfL34MBJWFA",
  authDomain: "project-71-8d402.firebaseapp.com",
  projectId: "project-71-8d402",
  storageBucket: "project-71-8d402.appspot.com",
  messagingSenderId: "521387017919",
  appId: "1:521387017919:web:5280a6ad9997c1c78e280a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 


  export default firebase.firestore()