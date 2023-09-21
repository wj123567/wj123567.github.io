// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
  import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
  import { getAuth,signInWithRedirect,GoogleAuthProvider,sendPasswordResetEmail, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
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


document.addEventListener('DOMContentLoaded', function(){
  const toggleChatBtn = document.getElementById('chat');
  const chatContainer = document.getElementById('chatContainer');
  const userInput = document.getElementById('userInput');
  const sendMessageBtn = document.getElementById('sendMessage');
  const chatbox = document.getElementById('chatbox');
  if ( toggleChatBtn ) { //if the element exists add the click event
    toggleChatBtn.addEventListener('click', () => {
      auth.onAuthStateChanged(user=>{
        if(user){
          chatContainer.style.display = chatContainer.style.display === 'none' ? 'block' : 'none';
        }else{
          window.location.assign("login.html");
        }
    })
    });

    sendMessageBtn.addEventListener('click', () => {
      const userMessage = userInput.value.trim();
      if (userMessage !== '') {
        const userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'message user-message';
        userMessageDiv.textContent = userMessage;

        const botMessageDiv = document.createElement('div');
        botMessageDiv.className = 'message bot-message';
        botMessageDiv.textContent = 'Got it!';

        chatbox.appendChild(userMessageDiv);
        chatbox.appendChild(botMessageDiv);

        userInput.value = ''; // Clear the input field
        chatContainer.style.display = 'block'; // Show the chatbox container
      }
    });
  }
});  

document.addEventListener('DOMContentLoaded', function(){
  const order2 = document.getElementById('order2');
  if ( order2 ) { //if the element exists add the click event
    order2.addEventListener('click', () => {
      auth.onAuthStateChanged(user=>{
        if(user===null){
          order2.href='login.html'
        }
    })
    });
  }
});  
     
    //Sign Up  
    document.addEventListener('DOMContentLoaded', function(){
      var signup2 = document.getElementById('signup2');
      if ( signup2 ) { //if the element exists add the click event
        signup2.addEventListener('click', function(){
          var userplaceholder =  document.getElementById("userplaceholder").value;
          var emailplaceholder =  document.getElementById("emailplaceholder").value;
          var passplaceholder = document.getElementById("passplaceholder").value;
          var errormsg = document.querySelector(".errormsg");
          
          if(userplaceholder.length<10){
            errormsg.innerHTML = "Please enter Username with 10 character";
            return;
          }

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
            errormsg.innerHTML = "Registration successfully";
            history.back();
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            errormsg.innerHTML = errorCode;
          });		  	
        });
      }
    });  

      //Login	  
      document.addEventListener('DOMContentLoaded', function(){
        var login2 = document.getElementById("login2");
        var errormsg = document.querySelector(".errormsg");
        if ( login2 ) { //if the element exists add the click event
          login2.addEventListener('click', function(){
            var emailplaceholder =  document.getElementById("emailplaceholder").value;
          var passplaceholder = document.getElementById("passplaceholder").value;
          signInWithEmailAndPassword(auth, emailplaceholder, passplaceholder)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            errormsg.innerHTML = "Login successfully";
            history.back();
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            errormsg.innerHTML = errorCode;
          });		  		  
          });
        }
      });

      // google
      document.addEventListener('DOMContentLoaded', function(){
        var google = document.getElementById("google");
        var errormsg = document.querySelector(".errormsg");
        const googleProvider = new GoogleAuthProvider();
        if ( google ) { //if the element exists add the click event
          google.addEventListener('click', function(){
          signInWithRedirect(auth,googleProvider)
          .then(() => {
            window.location.assign("./profile");
          }).then(() => {
            window.location.assign("index.html");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            errormsg.innerHTML = errorCode;
          });		  		  
          });
        }
      });

      //Logout  
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
      
      // reset
      document.addEventListener('DOMContentLoaded', function(){
        var reset = document.getElementById('reset');
        var errormsg = document.querySelector(".errormsg");
        if ( reset ) { //if the element exists add the click event
          reset.addEventListener('click', function(){
            var emailplaceholder =  document.getElementById("emailplaceholder").value;

            sendPasswordResetEmail(auth, emailplaceholder).then(()=>{
              console.log('Link has been sent')
              errormsg.innerHTML = "Link has been sent";
            })
            .catch(error =>{
              const errorMessage = error.message;
              const errorCode = error.code;;
              console.log(errorMessage);
              errormsg.innerHTML = errorCode;
            })
          })
          

        }
      });