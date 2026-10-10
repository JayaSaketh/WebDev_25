var users=[
 {
    "name":"Harry",
    "gender":"Male",
    "pic":"img/photo.jpg"
 },
 {
    "name":"Mixy",
    "gender":"Female",
    "pic":"img/photo2.jpg"
 }
];
var index=0;
function toggle(){
   index=index==0 ? 1:0;
    document.getElementById("name").innerText=users[index].name;
    document.getElementById("gender").innerText=users[index].gender;
    document.getElementById("photo").src=users[index].pic;
}