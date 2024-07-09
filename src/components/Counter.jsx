// import React, { useState } from 'react'

// // react hooc ke andar useState hota hai
// function Counter() {
//   let [count,SetCount]=useState(0);    // D structuring
//     // let count = 0;
//     function handleClick(){
//         // count++;
//         // console.log(count);

//         SetCount(count+1);
//     }
//   return (
//     <div>
//         <h1>Count - {count}</h1>
//         <button onClick={handleClick}>Increment</button>

//     </div>
//   )
// }

// export default Counter

import React, { useEffect, useState } from 'react'

 const Counter = () => {
  let [count,Setcoutn]=useState(0)
  let [city,Setcity]=useState('bhopal')
  let [data,Setdata]=useState([])

  function fun1(){
    Setcoutn(count+1)
  }

  useEffect(()=>{
    fetch("https://dummyjson.com/recipes") 
.then((res)=>{
  return res.json()
}) .then((data)=>{
  console.log(data);
  Setdata(data.recipes)
}); 

},[count])

  function fun2(){
    Setcity('delhi')
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={fun1}>Count</button>
      <p>{city}</p>
      <button onClick={fun2}>city</button>

      {
      
      data.map((a)=>{
        return(<>
        <p>{a.id}</p>
        <p>{a.name}</p>
        </>)
      })
        
     }
    </div>


  )
}

export default Counter
