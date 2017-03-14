console.print = (stuff) => {
	const code = document.querySelector('.code');
	console.log(JSON.stringify(stuff, null, 2))
	if (typeof stuff == "object") {
		code.innerText = JSON.stringify(stuff, null, 2)
	}else {
		code.innerText = stuff
	}
}
var videogamesUrl = "http://localhost:8000/videogames.json";
var menuUrl = "http://localhost:8000/chipotleMenu";
var menu;


// --------- XMLHttpRequest -----------
/*
	function reqListener () {
	  console.log(this.responseText);
	}

	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", reqListener);
	oReq.open("GET", apiUrl);
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

// -----fetch API (new standard) -------

// fetch(menuUrl)
// 	.then(function(res) {
// 		return res.json();
// 	})
// 	.then(function(data) {
// 		menu = data;
// 		console.print(menu.slice(0,10));
// 	})




























