import React from "react";
import { CartContexts } from "./Cart";
import { useContext ,useState} from "react";
// import ProdcutsAddbutton from "./ProductsAddbutton";

const Items =({id,description,title,img,price,quantity})=>{
 
  
    const {removeItems,increment,decrement} = useContext(CartContexts)

    
    return(
        <div>
 <div className="items-info">
<div className="product-img">
    <img src={img} alt="image"/>
  </div>  
  <div className=" title">
    <h2>{title}</h2>
    <p>{description}</p>
    <h2>${price}</h2>
</div>

<div className="add-minus-quantity">
<i className="fas fa-minus minus" onClick={()=>decrement(id)}></i>
<input type="text" placeholder={quantity}/>
<i className="fas fa-plus add" onClick={()=>increment(id)}></i>


</div>





<div className="remove-item">
<i className="fas fa-trash-alt remove" onClick={()=>removeItems(id)}></i>
</div>

</div>
{/* <ProdcutsAddbutton/> */}
<hr/>

</div>
    )
}
export default Items;