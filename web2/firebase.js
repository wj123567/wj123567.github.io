// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
  import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC8PbsVpFckIu2qi-wrEo6f8zg7_UmtkjI",
    authDomain: "gamerhub-2180b.firebaseapp.com",
    databaseURL: "https://gamerhub-2180b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "gamerhub-2180b",
    storageBucket: "gamerhub-2180b.appspot.com",
    messagingSenderId: "891625973763",
    appId: "1:891625973763:web:061747ce41e576d9a70636",
    measurementId: "G-LZLNDMLVQR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  //initialize variable
  const auth = getAuth();
  const database =getDatabase(app);
  
  auth.onAuthStateChanged(user=>{
    if(user){
      console.log('user logged in: ', user)
      document.getElementById('logout').style.display = 'block';
      document.getElementById('signup').style.display = 'none';
      document.getElementById('login').style.display = 'none';
    }else{
      console.log('user logged out')
      document.getElementById('logout').style.display = 'none';
      document.getElementById('signup').style.display = 'block';
      document.getElementById('login').style.display = 'block';
    }
})
     
    //----- New Registration code start	  
    document.addEventListener('DOMContentLoaded', function(){
      var signup2 = document.getElementById('signup2');
      if ( signup2 ) { //if the element exists add the click event
        signup2.addEventListener('click', function(){
          var userplaceholder =  document.getElementById("userplaceholder").value;
          var emailplaceholder =  document.getElementById("emailplaceholder").value;
          var passplaceholder = document.getElementById("passplaceholder").value;
          //For new registration
          createUserWithEmailAndPassword(auth, emailplaceholder, passplaceholder)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            set(ref(database, 'users/' + user.uid),{
              username: userplaceholder,
              email: emailplaceholder

            })


            console.log(user);
            alert("Registration successfully!!");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorMessage);
            alert(error);
          });		  	
        });
      }
    });  
      //----- End

      //----- Login code start	  
      document.addEventListener('DOMContentLoaded', function(){
        var login2 = document.getElementById("login2");
        if ( login2 ) { //if the element exists add the click event
          login2.addEventListener('click', function(){
            var emailplaceholder =  document.getElementById("emailplaceholder").value;
          var passplaceholder = document.getElementById("passplaceholder").value;
          signInWithEmailAndPassword(auth, emailplaceholder, passplaceholder)
          .then((userCredential) => {
            // Signed in 
            
            const user = userCredential.user;
            console.log(user);
            alert(user.email+" Login successfully!!!");
            window.location.assign("index.html");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
          });		  		  
          });
        }
      });
      //----- End

      //----- Logout code start	  
      document.addEventListener('DOMContentLoaded', function(){
        var logout = document.getElementById('logout2');
        if ( logout ) { //if the element exists add the click event
          logout.addEventListener('click', function(){
            signOut(auth).then(() => {
              // Sign-out successful.
              console.log('Sign-out successful.');
              alert('Sign-out successful.');
            }).catch((error) => {
              // An error happened.
              console.log('An error happened.');
            });		  		  
          });
        }
      });
      //----- End