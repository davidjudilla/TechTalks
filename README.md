# Web Dev and JS Essentials Tech Talk
# techtalk.davidjudilla.com
# Topics
1. [Web APIs](#web-apis)
2. [Array Methods](#array-methods)
3. [Live Demo](#live-demo)

# Web APIs
## `document`
```js
	document.querySelector('input'); // Returns the first <input> 
	on the page
```
```js
	document.querySelectorAll('div'); // Returns all <div> tags on the page
```
#### Selecting by Class Name and IDs
To select a `class` or `id` you'd insert a `.` or `#`, respectively, before hand.

```js
 	// Returns element where class="header"
	document.querySelector('.header');

	// Returns element where id="popup"
	document.querySelector('#popup');
```

#### Accessing properties of selected elements
```js
	var input = document.querySelector('input');
	input.value // Returns what's currently inside of the input field
```

#### Adding Event Listeners
```js
	// When a key is pressed inside of the input field, 
	// the value of that input will be logged to console
	input.addEventLister('keydown', function(e) {
		console.log(input.value);
	})
```

# `fetch`
```js
	var menuUrl = "http://localhost:8000/chipotleMenu";

	// --------- XMLHttpRequest -----------

	function reqListener () {
	  console.log(this.responseText);
	}

	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", reqListener);
	oReq.open("GET", apiUrl);
	oReq.send();

	// ----------- $.ajax -----------------


	$.ajax({
		url: apiUrl, 
		success: function(data){
			console.log(data);
	    }
	});

	// -----fetch API (new standard) -------

	fetch(menuUrl)
		.then(function(res) {
			return res.json();
		})
		.then(function(data) {
			menu = data;
			console.print(menu.slice(0,10));
		})
```

## Note
* `fetch` is an asyncronous call, meaning that the rest of your code will still be executed. This is why we need a callback function to process the response once it finally arrives.

```js
// Do stuff before

fetch(menuUrl)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
        	// Do all your work that's related to `data` in this block
            var stuff = data;
        })

// If I were to try to access the variable `stuff` here, you'd get an empty variable
console.log(stuff) // outputs ""
```

# Array Methods
### Chipotle is my life
```js 
var chipotleMenu = [
	{ type: "entree", name: "burrito"},
	{ type: "entree", name: "salad"},
	{ type: "entree", name: "tacos"},
	{ type: "entree", name: "bowl"},
	{ type: "filling", name: "chicken", price: 6.50},
	{ type: "filling", name: "barbacoa", price: 7.50},
	{ type: "filling", name: "carnitas", price: 6.95},
	{ type: "filling", name: "sofritas", price: 6.50},
	{ type: "filling", name: "steak", price: 7.50},
	{ type: "filling", name: "veggies", price: 6.50},
	{ type: "topping", name: "guacamole", price: 2.05}
];
```
## `for loop`
```js
function getItemNames(menu) {
	var names = [];
	var menuItem;

	for(var i = 0; i < menu.length; i++) {
		menuItem = menu[counter];
		names.push(menuItem.name);
	}
	return names;
}

var names = getItemNames(chipotleMenu)
console.log(names);
// Outputs: ["burrito", "salad", "tacos", "bowl", "chicken",
// "barbacoa", "carnitas", "sofritas", "steak", "veggies", "guacamole"]

```

## `Array.forEach()`
```js
function getItemNames(menu) {
	var names = [];

	menu.forEach(function(item) {
		names.push(item.name);
	})

	return names;
}

var names = getItemNames(chipotleMenu)
console.log(names);
// Outputs: ["burrito", "salad", "tacos", "bowl", "chicken",
// "barbacoa", "carnitas", "sofritas", "steak", "veggies", "guacamole"]
```
## Note
```js 
// New features arrived in 2016 that allow us to now 
// write more concise functions, which are useful for callbacks

menu.forEach(function(item) {
	names.push(item.name);
})	

// Can now be written as
menu.forEach((item) => {
	names.push(item.name)
});

// Even shorter could be
menu.forEach(item => names.push(item.name))
```

## `Array.map()`
```js
var itemNames = chipotleMenu.map(item => item.name)
```

```js
// Outputs
["burrito", "salad", "tacos", "bowl", "chicken", "barbacoa", "carnitas", "sofritas", "steak", "veggies", "guacamole"]
```

## `Array.filter()`
```js
var entrees = chipotleMenu.filter(item => item.type == "entree")
```

```js
// Outputs
[
  {
    "type": "entree",
    "name": "burrito"
  },
  {
    "type": "entree",
    "name": "salad"
  },
  {
    "type": "entree",
    "name": "tacos"
  },
  {
    "type": "entree",
    "name": "bowl"
  }
]
```
## `Array.reduce()`
Probably too advanced for this talk, but highly recommend you learn it

# Live Demo
Check [here](https://github.com/davidjudilla/TechTalks/tree/master/src/redditTiles) for Reddit Tiles Demo
