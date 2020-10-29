const https = require('https'); 

const ENDPOINTS = 'https://coderbyte.com/api/challenges/json/json-cleaning'


 
// example to fetch codebyter api 
function getJson(API) {

https.get(API, (resp ) => {
  

  let data = '';
 
  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    console.log(JSON.parse(data));
    let body = JSON.parse(data)
 return body;
 //filter(body)
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
})
}
getJson(ENDPOINTS);


//test api by calling node api.js