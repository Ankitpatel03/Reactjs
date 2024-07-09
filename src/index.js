import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

let element=(
        <div>
                <App data='hello'/>
        </div>
)





let rootEl=document.getElementById("root")

ReactDOM.render(element,rootEl);
