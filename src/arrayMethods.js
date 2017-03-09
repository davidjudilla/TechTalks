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

// for loop
/*
function getItemNames(menu) {
	var names = [],
		counter,
		menuItem;

	for(counter = 0; counter < menu.length; counter++) {
		menuItem = menu[counter];
		names.push(menuItem.name);
	}
	return names;
}

var names = getItemNames(chipotleMenu)
console.log(JSON.stringify(names, null, 2))

*/


// Array.forEach
/* 
function getItemNames(menu) {
	var names = [];

	menu.forEach(function(item) {
		names.push(item.name);
	})

	return names;
}
*/

// Array.map
// var itemNames = chipotleMenu.map(item => item.name)

// Array.filter
// var entrees = chipotleMenu.filter(item => item.type == "entree")


// Max Price

// var fillings = menu.filter(item => item.type == "filling");
// var maxPrice = {price: 0};
// fillings.forEach(item => {
//   if (item.price > maxPrice.price) maxPrice = item
// })

// console.log(maxPrice)

// Array.reduce
