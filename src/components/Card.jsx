
import React from 'react'
// rfce - sortcut 
function Card(props) {
//     let Title="zomato";
    let Description="to order food online"
    return(

            <div>
                    <h1>{props.title}</h1>
                    <p>{Description}</p>
            </div>
    )
}

export default Card