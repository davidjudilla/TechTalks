const fs = require('fs')
const csv = require('csvtojson')

const csvFilePath='static/videogames.csv'
const data = []
csv()
  .fromFile(csvFilePath)
  .on('json',(jsonObj)=>{
    // combine csv header row and csv line to a json object 
    // jsonObj.a ==> 1 or 4 
    console.log(jsonObj)
    data.push(jsonObj)
  })
  .on('done',(error)=>{
    fs.writeFile('videogames.json', JSON.stringify(data), function (err) {
      if (err) return console.log(err);
    });
    console.log('end')
  })

