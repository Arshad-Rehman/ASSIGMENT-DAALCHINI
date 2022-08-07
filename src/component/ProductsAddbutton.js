import React, { useContext } from "react";
import { CartContext12 } from "../CartContext12";
// import "./ProductsAddbutton.css";

export const Counter = ({
  id,
  image,
  title,
  description,
  price,
  discountedPrice,
}) => {
  const {cart, addToCart} = useContext(CartContext12);

  return (
    // <div className="counter">
    <div>
      <button>
    
      </button>
    </div>
  );
};
function ProdcutsAddbutton(product) {
  const { cart, addToCart } = useContext(CartContext12);
  return (
  
          <div className="counter-wrapper">
           
            {!cart.items.hasOwnProperty(product.id) ? (
              <button
                onClick={() =>
                  addToCart({
                    id: product.id,
                    image: product.image,
                    title: product.title,
                    descrption: product.description,
                    price: product.price,
                    discountedPrice: product.discountedPrice,
                  })
                }
                className="add-btn"
              >
                ADD
              </button>
            ) : (
              <Counter {...product} />
            )}
          </div>
   
  );
}

export default ProdcutsAddbutton;