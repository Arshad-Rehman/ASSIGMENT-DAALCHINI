import React, { useContext } from "react";

import { CartContext12 } from "../CartContext12";
import { Counter } from "./ProductsAddbutton";

function CartTable() {
  const { cart } = useContext(CartContext12);

  return (
    <table >
      <tr>
        <th style={{ maxWidth: "30%" }}>Items</th>
        <th>Qty</th>
        <th>Amount</th>
      </tr>
      {Object.values(cart.items).map((product, index) => (
        <tr key={index}>
          <td>{product.title}</td>
          <td>
            <Counter {...product} />
          </td>
          {/* <td>{product.discountedPrice * product.count}</td> */}
        </tr>
      ))}
      <tr
        style={{
          borderBottom: "1px solid lightgray",
          borderTop: "1px solid lightgray",
          fontWeight: "bold",
        }}
      >
        <td>Total</td>
        <td></td>
        {/* <td>₹{cart.totalAmount}</td> */}
      </tr>
    </table>
  );
}

export default CartTable;