
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js"
import { 
  getAuth, 
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
  } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js"

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBKczdvReM37TFMsXu59vGBzS-JB_QrTCg",
    authDomain: "fir-ebb00.firebaseapp.com",
    projectId: "fir-ebb00",
    storageBucket: "fir-ebb00.firebasestorage.app",
    messagingSenderId: "558378377999",
    appId: "1:558378377999:web:6422f63f39911e7a29147a",
    measurementId: "G-X95TEVLGHE"
  };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app); // Initialize Analytics
// const auth = getAuth();

// // Signup Function
// function signup() {
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;

//   // Check if both fields are filled
//   if (email === '' || password === '') {
//     alert('Please fill out both email and password fields.');
//     return;
//   }

//   // Optional: Add more password validation (e.g., length, special characters)
//   if (password.length < 6) {
//     alert('Password should be at least 6 characters long.');
//     return;
//   }

//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // User signed up successfully
//       const user = userCredential.user;
//       console.log('User signed up:', user);
//       alert('Sign up successful! Welcome, ' + user.email);
//       // window.location.pathname = 'signin.html'
//        window.location.pathname = 'login.html'
//     })
//     .catch((error) => {
//       // Handle sign-up errors
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.error('Error signing up:', errorCode, errorMessage);

//       // Display a user-friendly error message
//       alert('Error: ' + errorMessage);
//     });
// }

// // Attach event listener to button
// document.getElementById('signupButton')?.addEventListener('click', signup);

// function signin() {
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;

//   // Check if both fields are filled
//   if (email === '' || password === '') {
//     alert('Please fill out both email and password fields.');
//     return;
//   }

//   signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log('Signed in successfully: ', user)
//     alert('Logged in...')
//     sessionStorage.setItem("user", user.accessToken);
//      window.location.pathname = './dashboard.html'
      
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(error)
//   });
// }

// document.getElementById('loginButton')?.addEventListener('click', signin);


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Initialize Analytics
const auth = getAuth();

// Signup Function
function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if both fields are filled
  if (email === '' || password === '') {
    alert('Please fill out both email and password fields.');
    return;
  }

  // Optional: Add more password validation (e.g., length, special characters)
  if (password.length < 6) {
    alert('Password should be at least 6 characters long.');
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User signed up successfully
      const user = userCredential.user;
      console.log('User signed up:', user);
      alert('Sign up successful! Welcome, ' + user.email);
      window.location.pathname = 'login.html'
    })
    .catch((error) => {
      // Handle sign-up errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error signing up:', errorCode, errorMessage);

      // Display a user-friendly error message
      alert('Error: ' + errorMessage);
    });
}

// Attach event listener to button
document.getElementById('signupButton')?.addEventListener('click', signup);

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if both fields are filled
  if (email === '' || password === '') {
    alert('Please fill out both email and password fields.');
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('Signed in successfully: ', user)
    alert('Logged in...')
    sessionStorage.setItem("user", user.accessToken);
    window.location.pathname = './dashboard.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)
  });
}

document.getElementById('loginButton')?.addEventListener('click', login);



// function signinWithGoogle() {
//   signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     console.log(user)
//     window.location.pathname = 'welcome.html'
//     sessionStorage.setItem('user', token)
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     console.log(error)
//     // ...
//   });
// }

// document.getElementById('googleLoginButton')?.addEventListener('click', signinWithGoogle);
