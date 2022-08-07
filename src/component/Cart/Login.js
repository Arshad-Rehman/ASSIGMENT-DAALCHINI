import React,{useState} from "react";
import Card from "../UI/Card";
import classes from './Login.module.css';
const Login =(props)=>{
    const[clicked,setClicked]=useState(false);
 
const orderCardHandler=()=>{
   setClicked(true);
}
    return(
        <Card>
            <div className={classes.control}>
                <h1>Login</h1>
  <label htmlFor='street' className={classes.label}>Street</label>
        <input type='text' id='street'className={classes.input} />

        <label htmlFor='postal' className={classes.label}>Postal Code</label>
        <input type='text' id='postal' className={classes.input}/>
        </div>
        <div className={classes.actions}>
        <button type='button' onClick={props.onClose} className={'button'}>
          Close
        </button>
       {!clicked  && <button type='button' onClick={orderCardHandler} className={'button'}>Submit</button>}
       {clicked  &&<p>Your are loggedin</p>}
        <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
        </div>
        </Card>
    )
}
export default Login;