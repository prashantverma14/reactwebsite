import React from "react";
import product1 from "../assests/product1.jpg";
import product2 from "../assests/product2.jpg";
import product3 from "../assests/product3.jpg";
import product4 from "../assests/product4.jpg";
import "./produc.css";


export default function Products()  {
  const data = [
    {
      image: product1,
      name: "Chicken Burger",
      price: "$22.4/pcs",
    },
    {
      image: product2,
      name: "Toasted Bread",
      price: "$5.5/pcs",
    },
    {
      image: product3,
      name: "Egg Sandwich",
      price: "$8/pcs",
    },

    {
      image: product4,
      name: "Raspberry Cake",
      price: "$12.5/pcs",
    },
  ];
  return (
    <section id="products">
      <div className="title">
        <h1>
          <span>Favourite</span> All the time!
        </h1>
      </div>
      <div className="products">
        {data.map((product) => {
          return (
            <div className="product">
              <div className="image">
                <img src={product.image} alt="" />
              </div>
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
              <p>He Printing and Typesetting the industry. Lorem Ipsum has</p>
              <button>Buy Now</button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
