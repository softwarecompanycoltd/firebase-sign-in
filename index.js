// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACvRuhCkxk9lNrweXU14MUytOG_muxAFg",
  authDomain: "software-company-oauth-db.firebaseapp.com",
  projectId: "software-company-oauth-db",
  storageBucket: "software-company-oauth-db.firebasestorage.app",
  messagingSenderId: "976995041868",
  appId: "1:976995041868:web:2eceaa048c433a5724eae9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()

// set up our register function
function resigster () {
  // get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value
  full_name = document.getElementById('full_name').value
  favourite_song = document.getElementById('favourite_song').value
  milk_before_cereal = document.getElementById('milk_before_cereal').value

  // validate input fiels 
}
