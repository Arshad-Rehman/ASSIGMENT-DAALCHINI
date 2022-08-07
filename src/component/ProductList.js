import React from "react";
import ProdcutsAddbutton from "./ProductsAddbutton";

const LIST = [
    {
        id: 1,
        title: "Samsung S21",
        description: "black in color",
        price: "2500",
        img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        quantity: 0,
      },
      {
        id: 2,
        title: "Samsung M21",
        description: "white in color",
        price: "2300",
        img: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        quantity: 0,
      },
      {
        id: 3,
        title: "Redmi 9",
        description: "black in color",
        price: "3500",
        img: "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
        quantity: 0,
      },
      {
        id: 4,
        title: "Iphone 12",
        description: "Best mobile ever",
        price: "90500",
        img: "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
        quantity: 0,
      },
      {
        id: 5,
        title: "Samsung S21",
        description: "black in color",
        price: "2500",
        img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        quantity: 0,
      },
      {
        id: 6,
        title: "Redmi 9",
        description: "black in color",
        price: "3500",
        img: "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
        quantity: 0,
      },
      {
        id: 7,
        title: "Samsung S21",
        description: "black in color",
        price: "2500",
        img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        quantity: 0,
      },
      {
        id: 8,
        title: "Iphone 12",
        description: "Best mobile ever",
        price: "90500",
        img: "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
        quantity: 0,
      },
      {
        id: 9,
        title: "Samsung S21",
        description: "black in color",
        price: "2500",
        img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        quantity: 0,
      },
];
function ProductList() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div>
      {LIST.map((product, index) => (
        <ProdcutsAddbutton
          id={index}
          img={product.img}
          price={product.price}
         
          title={product.title}
          description={product.description}
          key={index}
        />
      ))}
    </div>
  );
}

export default ProductList;