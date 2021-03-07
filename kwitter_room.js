var firebaseConfig = {
    apiKey: "AIzaSyCCjYImM9yH53pqvldvFeR1chorlITvhpk",
    authDomain: "kwitter-19db8.firebaseapp.com",
    projectId: "kwitter-19db8",
    storageBucket: "kwitter-19db8.appspot.com",
    messagingSenderId: "141194579669",
    appId: "1:141194579669:web:bacaa94336de88ef229c5c",
    measurementId: "G-0N94XTM377"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = ("kwitter.html");
}

function addRoom() {
Room_name = document.getElementById("room_name").value;
console.log("Room_name" , Room_name);
firebase.database().ref("/").child(Room_name).update({purpose:"adding_roomname"});
window.location = "kwitter_page.html";
}
