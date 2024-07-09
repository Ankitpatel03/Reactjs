
import React, { useState } from 'react'

function City(name) {
    console.log(name,'hehe');
    let [city,SetCity]=useState('Bhopal');
    function fun1(){
        SetCity('Delhi')
       
    }
  return (
    <div>
        <p>{city}</p>
        <button onClick={fun1}>Change</button>
        <h3>{name.a}</h3>
        
    </div>
  )
}

export default City