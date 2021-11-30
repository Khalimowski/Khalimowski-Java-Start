

var database = [{
    username: "Kacper",
    password: "secret"
},
{   username: "Jan",
    password: "secret"},
    {
     username: "Stefan",
     password: "tajny"   
    }
]

var newsFeed =[{
    username: "Tomek",
    timeline: "Jestem Tata"

},
{
    username: "Joanna",
    timeline: "Jestem Mama"
},
{
    username: "Krzysztof",
    timeline: "Jestem Brat"
}]

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
    if (user === database[0, 1, 2].username && 
        pass === database[0, 1, 2].password) {
        console.log(newsFeed);
} else {
    alert("Sorry, wrong username and password")
    }
