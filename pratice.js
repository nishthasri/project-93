var firebaseConfig = {
    apiKey: "AIzaSyCCjYImM9yH53pqvldvFeR1chorlITvhpk",
    authDomain: "kwitter-19db8.firebaseapp.com",
    databaseURL: "https://kwitter-19db8-default-rtdb.firebaseio.com",
    projectId: "kwitter-19db8",
    storageBucket: "kwitter-19db8.appspot.com",
    messagingSenderId: "141194579669",
    appId: "1:141194579669:web:bacaa94336de88ef229c5c",
    measurementId: "G-0N94XTM377"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
function addUser() {
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose : "adding user"
});
}