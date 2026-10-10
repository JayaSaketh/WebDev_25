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
function randomToggle(){
    fetch("https://randomuser.me/api").then(function(data){
        return data.json();
    }).then(function(jsondata){
        var randomUser= jsondata.results[0];
        var fullName=randomUser.name.title+" "+randomUser.name.first+" "+randomUser.name.last;
        var gender=randomUser.gender;
        var pic=randomUser.picture.large;
        document.getElementById("name").innerText=fullName;
        document.getElementById("gender").innerText=gender;
        document.getElementById("photo").src=pic;
    });

}