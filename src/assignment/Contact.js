import React, { useState } from 'react';


const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
      
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

const models = []

function comparsion (user, old) {
if(!user.lastname || !old.lastname){
  return -1
}

  var aLastName = user.lastname[0]; //first index of current lastname
  var bLastName = old.lastname[0 ];  //first index of previous lastname in the array
  if (aLastName < bLastName) return -1; 
  if (aLastName > bLastName) return 1;
  return 0;
}

function PhoneBookForm({ addEntryToPhoneBook }) {
const user =  {}
  return (
    <form onSubmit={e => { e.preventDefault() }} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        onChange={(e)=>{user.firstname =e.target.value}} 
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text' 
          onChange={(e)=>{user.lastname =e.target.value}} 
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
         onChange={(e)=>{user.phone =e.target.value}} 
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User'
        //OnClick event add user object
        onClick={(e)=>{addEntryToPhoneBook(user)}}
      />
    </form>
  )
}

function InformationTable({user}) {
if(user){
models.push(user)
console.log(models)

}
const users = models.length >1 ? models.sort(comparsion) : models
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead> 
          <tbody>
      {user?users.map((entity, index) =>
         <tr key={index}>
          <td style={style.tableCell}>{entity.firstname}</td>
          <td style={style.tableCell}>{entity.lastname}</td>
          <td style={style.tableCell}>{entity.phone}</td>
             </tr>
          ):null}
      </tbody> 
    </table>
  );
}


export function Application(props) {
  const [user, setUser] = useState()

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={setUser}/>

      <InformationTable user={user} />
    </section>
  );
}
