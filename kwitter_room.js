//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCwudKJ6Rx0tpkWNyPip-C03k2ELwqRcDg",
    authDomain: "kwitter-17240.firebaseapp.com",
    databaseURL: "https://kwitter-17240-default-rtdb.firebaseio.com",
    projectId: "kwitter-17240",
    storageBucket: "kwitter-17240.appspot.com",
    messagingSenderId: "258558653937",
    appId: "1:258558653937:web:b571d7aead129a21b28050"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
    console.log("Room Name: " + Room_names);
    row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row; 
   //End code
   });});}
getData();
function logout(){
    localStorage.removeItem("user_name");
    window.location = "index.html";

}

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "Add Room Name"
  });

  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}



function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}