fetch('http://www.reddit.com/r/aww.json')
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })