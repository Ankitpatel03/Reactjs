import React from 'react'

function FoodItem() {
        const FoodItem=["Pizza" , "Burger" , "IceCream"]
  return (
    <div>
            {/* <Card titel="Pizza"/>
            <Card titel="Burger"/>
            <Card titel="IceCream"/>  */}

         {FoodItem.map((item)=>{
                return <Card title={item}/>
            })}
    </div>
  )
}

export default FoodItem