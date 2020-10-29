import './App.css';
import {Application} from "./assignment/Contact"
import React from 'react';
import Backend  from './assignment/backend'


 
function App() { 
  return (  
   
    <div className="Glomo"> 
        <h4>Glomo Assignment </h4>
  <div className = "answers"> 
<h6>1. Array Challenge see file arrayChallenge.js </h6> 

<br/> 
<h6>2. Backend Challenge see file backend.js </h6> 
<Backend/>
<br/>
<h6>3. Frontend Challenge test below add users</h6> 
<div  style={{display: 'flex',    alignItems: 'center',    justifyContent: 'center',}}> <Application/> </div> <br/>

<h6>4.Tic Tac Toe</h6> 


</div>



    </div>

  );
}

export default App;
