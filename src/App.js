import { useState } from "react"

import "./App.css"
export const App=()=>{
  
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[repassword,setRepassword]=useState("")
  const[show,setShow]=useState(false)
  const[show1,setShow1]=useState(false)
  const[show2,setShow2]=useState(false)
  const[show3,setShow3]=useState(false)
  const[show4,setShow4]=useState(false)
var lowerCase= new RegExp("(?=.*[a-z])")
 var upperCase= new RegExp ("(?=.*[A-Z])")
var number=new RegExp("(?=.*[0-9])")
 var special=new RegExp("(?=.*[!@#%*/^])")
var maximun=new RegExp("(?=.{8,})");
  function my(event){
    event.preventDefault()
    
    if(maximun.test(password)){
     
      setShow(true)
     
    
    }else{
      setShow(false)
    }
   
    if(lowerCase.test(password)){
     
      setShow1(true)
    }
    else{
      setShow1(false)
    }
    if(upperCase.test(password)){
     
      setShow2(true)
    }
    else{
      setShow2(false)
    }
    if(special.test(password)){
     
      setShow3(true)
    }
    else{
      setShow3(false)
    }
    if(number.test(password)){
     
      setShow4(true)
    }
    else{
      setShow4(false)
    }
   
     if(password!=repassword){
      alert("password not match please enter same password")
    }
    else{
      alert("Account successfully created")
    }
    
    
   
   
  }
  return(
    <>
    <div className="container">
   <form onSubmit={my}  >
    <center><h2>register form</h2></center>
    <label>email:</label>
    <input className="form-control" required type="email" value={email} onChange={(x)=>{setEmail(x.target.value)}}></input>
   <label>New password:</label>
   
   <input className="form-control" required type="password" value={password} onChange={(x)=>{setPassword(x.target.value)}}></input>
  
   <label>re-enter-password</label>
   <input className="form-control"  type="password"  value={repassword} onChange={(x)=>{setRepassword(x.target.value)}} ></input>
   <h5>your pasword must contain</h5>
   {
      show?<h4 style={{color:"white"}}> <span> 🗸</span> At least 8 characters</h4>:<h4> At least 8 characters</h4>
    }
     {
      show1?<h4 style={{color:"white"}}> <span> 🗸</span>  A lower case letter</h4>:<h4>A lower case letter</h4>
    }
     {
      show2?<h4 style={{color:"white"}}> <span> 🗸</span>A upper case letter</h4>:<h4>An upper case letter</h4>
    }
     {
      show3?<h4 style={{color:"white"}}> <span> 🗸</span> A special charecter</h4>:<h4>A special charecter</h4>
    }
     {
      show4?<h4 style={{color:"white"}}> <span> 🗸</span> A Number</h4>:<h4>A Number</h4>
    }
   <input id="butn" type="submit" value="Create account"></input>
   </form>
  
  
 </div>
    </>
  )
}