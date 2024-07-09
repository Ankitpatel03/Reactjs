import React, { useState } from 'react'

const Clock = () => {
    let [time,Settime]=useState()
    setInterval(()=>{
        let date=new Date().toLocaleTimeString()
        Settime(date)
    })
  return (
    <div>
        {time}
    </div>
  )
}

export default Clock