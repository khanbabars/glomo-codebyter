//uncomment and execute file in the terminal node arrayChallenge.js

function ArrayChallenge(arr) { 

    console.log(arr)
     const desks = arr.shift();
    // console.log(desks)
   
     const rows = desks/2
    // console.log(rows)
   
     const desk = [];
     let val = 0;
       for (let row = 0; row < rows; row ++){
       desk.push([])
         for (let col=0; col<2; col ++){
         const bookedSeats = arr.indexOf(val+1) > - 1 ? 0 : 1;
         desk[row].push(bookedSeats)
         val ++
   
       }
      
     console.log(desk[row])
   
     }
      
     let combination = 0
     for (let i = 0; i < rows -1; i ++ ) {

         if ((desk[i][0]=== 1 ) && (desk[i][1] === 1 )) combination++;
         if ((desk[i][0]=== 1 ) && (desk[i + 1][0] === 1 )) combination++;
         if ((desk[i][1]=== 1 ) && (desk[i + 1][1] === 1)) combination++;
   }
   
        if ((desk[rows -1][0]=== 1 ) && ( desk[rows - 1][1] === 1 )) combination++;
     return combination; 
   
   }
      
   // call function here 
console.log(ArrayChallenge([8,1,8]));

   



