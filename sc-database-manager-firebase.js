
    const firebaseConfig = {
        apiKey: "AIzaSyACvRuhCkxk9lNrweXU14MUytOG_muxAFg",
        authDomain: "software-company-oauth-db.firebaseapp.com",
        projectId: "software-company-oauth-db",
        storageBucket: "software-company-oauth-db.firebasestorage.app",
        messagingSenderId: "976995041868",
        appId: "1:976995041868:web:2eceaa048c433a5724eae9"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      const auth = firebase.auth();
  
      // Sign-Up
      const signupForm = document.getElementById("signup-form");
      signupForm.addEventListener("submit", (e) => {
        event.preventDefault();
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;
  
        auth.createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            alert("Sign-up successful!");
            signupForm.reset();
          })
          .catch((error) => {
            alert(`Error: ${error.message}`);
          });
      });
  
      // Sign-In
      const signinForm = document.getElementById("signin-form");
      signinForm.addEventListener("submit", (e) => {
        event.preventDefault();
        const email = document.getElementById("signin-email").value;
        const password = document.getElementById("signin-password").value;
  
        auth.signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            alert("Sign-in successful!");
            signinForm.reset();
          })
          .catch((error) => {
            alert(`Error: ${error.message}`);
          });
      });

const database = firebase.database();
auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    const userId = userCredential.user.uid;
    return database.ref('users/' + userId).set({
      email: email,
      createdAt: new Date().toISOString()
  });
})
.then(() => {
 alert("Sign-up successful and user data saved!");
 signupForm.reset();
})
.catch((error) => {
 alert(`Error: ${error.message}`);
});