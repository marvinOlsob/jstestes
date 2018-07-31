var todos = ["Buy a Turtle."];

window.setTimeout(function(){
	var input = prompt("What you would like to do?");
	while(input !== "quit"){
		//handle input
		if(input === "list") {
			listTodos();
		} else if(input === "new"){
			addTodo();
		} else if (input === "delete") {
			deleteTodo();
		}
		input = prompt("What you would like to do?");
		}
	console.log("You quit the app.");

}, 500);

function listTodos(){
	//forEach to print the list os saved Todos
	console.log("**********");
	todos.forEach(function(todo, index){
			console.log(index + ": " + todo);
		});	
	console.log("**********");
}

function addTodo(){
	//ask for new ToDo
	var newTodo = prompt("Enter new ToDo");
	//add to todos array
	todos.push(newTodo);
	console.log("Added Todo.");
}

function deleteTodo(){
	//ask for the index
	var indexDelete = prompt("Enter the index you wnat to delete");
	//delete that todo
	//use splice to cut the chosen one
	todos.splice(index,1);
	console.log("Deleted Todo.");
}


