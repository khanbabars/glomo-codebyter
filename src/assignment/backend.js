import React from 'react';  
/*****

See file api.js 

*/

const response = { name :{first:"Robert",middle:"",last:"Smith"},
age:25,
DOB:"-",
hobbies:["running","coding","-"],
education:{"highschool":"N\/A","college":"Yale"}

}

 


 const backendChallenge = () => {

  function filter(obj){
    let innerKey = '';
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

 
  console.log(obj)  //see reply in console
  }

   filter(response);
}

backendChallenge();




function Backend() {
  return <p style={{backgroundColor: "lightblue",  fontSize: '16px'}}>{JSON.stringify(response)} 
</p>
}

export default Backend;


