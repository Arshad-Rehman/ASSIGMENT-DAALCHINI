import Card from '../UI/Card';
import { CartContexts } from '../Cart';
import classes from './CartF.module.css'
import { useContext, useState } from 'react';
// import CartTable from '../CartTable';
const CartF = (props,{id,quantity})=>{
const[clicked,setClicked]=useState(false);
 
const orderCardHandler=()=>{
   setClicked(true);
}



    const {totalItem,totalAmount,items,increment,decrement} = useContext(CartContexts);
return (<Card onClose={props.onClose}>
    
        <div className={classes.total}>
        <span>Name: </span>
        <span>{items}</span>
     </div>
     <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
     </div>
     <div className={classes.total}>
        <span>Total items</span>
        <span>{totalItem}</span>
     </div>

     <div className="add-minus-quantity">
<i className="fas fa-minus minus" onClick={()=>decrement(id)}></i>
<input type="text" placeholder={quantity}/>
<i className="fas fa-plus add" onClick={()=>increment(id)}></i>


</div>
     <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
      {!clicked  &&<button className={classes.button} onClick={orderCardHandler}>Order</button>}
      {clicked  &&<p>Your order is placed sucessfully</p>}
      {/* <CartTable/> */}
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
    );
};
export default CartF;