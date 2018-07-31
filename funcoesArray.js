
var movies = [
	{
		name: "Titanic",
		rating: 4.5,
		watched: true},
	{
		name: "Whiplash",
		rating: 5,
		watched: true
	},
	{
		name: "Moonlight",
		rating: 4,
		watched: false
	}

];

movies.forEach(function(movie){
	var result = "You have ";
	if (movie.watched === true) {
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.name + "\" - ";
	result += movie.rating + " stars.";
	console.log(result);
});


function sumDigits(num) {
	var str = num + '';
	var half = str.length/2;
	var sum1 = str.substring(0, half);
	var sum2 = str.substring(half);
	var t1, t2;
  	t1 = sum1.split("").reduce(function(a, b){
      parseInt(a) + parseInt(b);
 	 });
  	      console.log(t1);
  	t2 = sum2.split("").reduce(function(a, b){
      parseInt(a) + parseInt(b);
      
  		});
  	console.log(t2);
  	return t1 == t2;
}
