const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {
  

  let data = '';
 
  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    console.log(JSON.parse(data));
    let body = JSON.parse(data)

function filter(obj){
Object.keys(obj).forEach((key)=> {
if(typeof obj[key]==='object' && !obj[key].length){
  Object.keys(obj[key]).forEach(innerKey=>{
  const match = new RegExp(/^-| |N\/A$/,'g').test(obj[key][innerKey])  || obj[key][innerKey]===""
  if(match){
    delete obj[key][innerKey]
  }
  })
}
else if(typeof obj[key]==='string'){
  const match = new RegExp(/^-| |N\/A$/,'g').test(obj[key]) || innerKey===""
  if(match){
    delete obj[key]
  }
}
else if(obj[key] && obj[key].length){
  obj[key].forEach((innerKey, index)=>{  
  const match = new RegExp(/^-| |N\/A$/,'g').test(innerKey)  || innerKey===""
  if(match){
     obj[key].splice(index, 1)
  }
  })
}
})
console.log(obj)
}
 filter(body)
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});