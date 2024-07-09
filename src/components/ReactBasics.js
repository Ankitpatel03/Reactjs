// const element=<h1><span>Welcome to react</span></h1>

// let firstName=prompt("Enter Your Name");
// let age=prompt("Enter your age");

// const element=<h1>My name is {firstName} and my age is {age} </h1>

// const element=(
//         <div>
//         <p>Hello mitro!!!</p>
//         <p>Nice to meet you</p>
//         </div>) ;


// conditional rendering

// let isLoggedIn=true;

// const element=(
//         <div>
//                 <h1>
//                         Hello {isLoggedIn?"Ankit":"Kon hai tu"}
//                 </h1>
//         </div>
// )

// const toggle="light"
// const element=(
//         <div>
//                 <h1 className={toggle}>Hello</h1>
//         </div>
// )


// let name=prompt("Enter your name ")
// const login=true;

// if(login){
//         alert("Welcome to our company!!!")
// }
// else{
//         alert("Please login first")
// }

// const element=(
//         <div>
//                 <h1>Hello {login?name:"user "}</h1>
//                 {(login)?<p>Enterd as {prompt("Please enter your Designation as well ")}</p>:"No User account"}
//         </div>
// )


// //// Event handling =======

// function handleClick(){
//         alert("Button clicked")
// }
// const element=(
//         <div>
//                 <button onClick={handleClick}>Click me</button>
//         </div>
// )

//   +++++++  Handling List +++++++++++

// let list=(
//         <div>
//                 {[<p key={1}>Item 1</p>,<p key={2}>Item 2</p>,<p key={3}>Item 3</p>,<p key={4}>Item 4</p>,]}
//         </div>
// )

// let names=['Virat','Dhoni','Bumrah']

// let list=(
//         <div>
//                 {names.map((n)=>{
//                         return <li key={n}>{n}</li>
//                 })}
//         </div>
// )