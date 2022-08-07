import React,{ useContext, useState} from "react";
import Items from "./Items";
import { CartContexts } from "./Cart";
import Header from "./Layout/Header";
import CartF from "./Cart/CartF";
import Login from "./Cart/Login";

const ContextCart=()=>{


const {item,totalItem} = useContext(CartContexts);

const[cartIsShown,setCartIsShown]=useState(false);
const[cartIssShown,setCartIssShown]=useState(false);
const showCartHandler =()=>{
setCartIsShown(true);
}
const hideCartHandler =()=>{
  setCartIsShown(false);
}

const showsCartHandler =()=>{
    setCartIssShown(true);
    }
    const hidedCartHandler =()=>{
      setCartIssShown(false);
    }
if(item.length === 0){
    return(
<div>
        <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>



        <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">you have <span className="total-items-count">{totalItem}</span>items in shopping cart</p>
    <div className="cart-items">
    <div className="cart-items-container">
    
    {item.map((curItem)=>{
    return <Items key={curItem.id}{...curItem}/>
    })
    }
    
    </div>
    </div>
  
    
    {/* <button>Checkout</button>
    <button className="clear-cart" onClick={clearCart}>Clear Cart</button> */}
    </section>

    {cartIsShown && <CartF onClose={hideCartHandler}/>}
{cartIssShown && <Login onClose={hidedCartHandler}/>}
<Header onShowCart={showCartHandler} onShowsCart={showsCartHandler}/>
    </div>
    )  
}


return(
    <div>
        <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>
    <section className="main-cart-section">
    <h1>shopping Cart</h1>
    <p className="total-items">you have <span className="total-items-count">{totalItem}</span>items in shopping cart</p>
<div className="cart-items">
<div className="cart-items-container">

{item.map((curItem)=>{
return <Items key={curItem.id}{...curItem}/>
})
}

</div>
</div>


  
{/* 
<button>Checkout</button>
<button className="clear-cart" onClick={clearCart}>Clear Cart</button> */}

</section>

{cartIsShown && <CartF onClose={hideCartHandler}/>}
{cartIssShown && <Login onClose={hidedCartHandler}/>}
<Header onShowCart={showCartHandler} onShowsCart={showsCartHandler}/>
</div>
)
}
export default ContextCart;