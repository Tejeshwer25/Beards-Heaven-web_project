var name= prompt("Enter your name","Guest");
var greeting = "Welcome "+name+" !" +`<br>Due to the Nationwide Lockdown to combat against the Chinese Virus Pandemic, we have closed our services uptil the lockdown exists. 
<br>
Hope you will understand. 😃
<br>
#stayhome_staysafe`;
console.log(greeting);
document.getElementById("hello").innerHTML = greeting;

function postComment()
{
    var post = new Array(document.getElementById("typehere").value);
    document.getElementById("posts").innerHTML = post;
    document.getElementById("typehere").value = "your post ";
}

