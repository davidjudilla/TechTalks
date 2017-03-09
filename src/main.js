console.print = (stuff) => {
	const code = document.querySelector('.code');
	console.log(JSON.stringify(stuff, null, 2))
	if (typeof stuff == "object") {
		code.innerText = JSON.stringify(stuff, null, 2)
	}else {
		code.innerText = stuff
	}
}
var apiUrl = "http://localhost:8000/videogames.json";
var videogames;


// --------- XMLHttpRequest -----------
/*
	function reqListener () {
	  console.log(this.responseText);
	}

	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", reqListener);
	oReq.open("GET", "http://www.example.org/example.txt");
	oReq.send();
*/

// ----------- $.ajax -----------------

/*
	$.ajax({
		url: apiUrl, 
		success: function(data){
			console.log(data);
	    }
	});
*/


// ------------ fetch API (new standard) -------------


	fetch(apiUrl)
		.then(res => res.json())
		.then(data => {
			videogames = data;
			console.print(data.slice(0,10));
		})




























