var todolist = [
    "clean room",
    "Brush Teeth",
    "Press ups",
    "Studya JavaScript",
    "Eat three times a day",
];

var todolist2 = [
    "clean rooms!",
    "Brush Teeth1",
    "Press ups!",
    "Studya JavaScript!",
    "Eat three times a day!",
];
var todolistLength = todolist.length
//for (var i=0; i < todolistLength; i++) {
 //   todolist.pop();
//}

function logsTodos(todo, i){
    console.log(todo, i)
}

todolist.forEach (logsTodos)
todolist2.forEach (logsTodos)