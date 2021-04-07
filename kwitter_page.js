//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name : user_name,
        message : msg,
        like : 0
    });
}

function getData() {
     firebase.database().ref("/" + room_name).on('value', function (snapshot) {
     document.getElementById("output").innerHTML = ""; 
     snapshot.forEach(function (childSnapshot) {
     childKey = childSnapshot.key;
     childData = childSnapshot.val(); 
     if (childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData; 
        //Start code 
        console.log(firebase_message_id);
        console.log(message_data);
        name_user = message_data['name'];
        message = message_data['message'];
        like = message_data['like'];
        name_with_tag = "<h4>" + name_user + "<img src='tick.png' class='user_tick'></h4>";
        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
        row = name_with_tag + message_with_tag + like_button + span_with_tag;
        document.getElementById("output").innerHTML += row;
        //End code 
    } }); }); } 
    getData();

function logout(){
    window.location = "index.html";
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
}