var srInput = document.querySelector('.subredditInput');
var tileContainer = document.querySelector('.tileContainer');

window.onload = function() {
	srInput.focus();
}

srInput.onfocus = function(e) {
	var input = e.target;
	var tmp = input.value;
	input.value = "";
	input.value = tmp; 
}

function getRedditPosts(event) {
	if(event.key == "Enter") {
		var url = `https://${srInput.value}.json`;
		fetch(url)
			.then(res => res.json())
			.then(data => {
				var links = data.data.children.map(child => child.data)
				var jpgs = links.filter(link => link.url.includes("jpg"))
				// var imgs = jpgs.map(jpg => `<img src="${jpg}" class="tile">`)
				var imgs = jpgs.map(jpg => {
					var img = document.createElement('img')
					img.src = jpg.url;
					img.className = "tile";
					img.addEventListener('click', function(e) {
						window.location.href = `https://www.reddit.com${jpg.permalink}`
					});
					return img;
				})
				console.log(imgs);
				// tileContainer.innerHTML = imgs.join('');

				tileContainer.innerHTML = '';
				imgs.forEach(img => tileContainer.appendChild(img))
			})
	}
	if (srInput.value.length < 17) {
		srInput.value = `www.reddit.com\/r//`
	}
}

srInput.addEventListener('keydown', getRedditPosts);