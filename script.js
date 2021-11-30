
var database = [{
    username: "Kacper",
    password: "secret"
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
    if (user === database[0].username && 
        pass === database[0].password) {
        console.log(newsFeed);
} else {
    alert("Sorry, wrong username and password")
    }
}

signIn(userNamePrompt, passwordPrompt);