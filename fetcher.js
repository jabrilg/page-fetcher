const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);

let urL = args[0];

let file = args[1]
;

request(urL, (error , response, body) => {
  console.log('error:', error);
  console.log('status:', response && response.statusCode);
  console.log('body:', body) 
  
  fs.writeFile(file, body, (err, stats) => {
    if(err) {
      console.error(err)
      return
    }
  
    console.log(`Downloaded and saved to ${file}`);
  })

})