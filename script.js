
var database = [
	{
		username: "kacper",
		password: "haslo"
	},
	{
		username: "tomek",
		password: "haslo"
	},
	{
		username: "asia",
		password: "haslo"
	},
];


]


var newsfeed = [
	{
		username: "Kacper",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Tomek",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Asia",
		timeline: "Javascript is preeetyy cool!"
	}
];
function isUserValid(username, password) {
	for (var i = 0; i <database.length; i++){
		if(database[i].username === username &&
			 database[i].password === password){
				 return true;
	
	
		}
	}	
	return false;
}


function signIn(username, password){
 if (isUserValid(username, password)) {
			console.log(newsfeed);
		} else {
			alert("Sorry, incorrect username and password")
		}
	}

var userNamePrompt = prompt("What's your username?")
var passwordPrompt = prompt("What's your Password?")
signIn(userNamePrompt, passwordPrompt)
=======


