import React from 'react';
import "./portfolio.css";
import background from "../assests/portfolio.jpg";


export default function Portfolio()  {
  return (
    <section id="portfolio">
    <div className="background">
      <img src={background} alt="" />
    </div>
    <div className="content">
      <h1>Buy Premium Pan Free Hand Toast!</h1>
      <h2>
        Lorem, ipsum dolo r sit amet consectetur adipisicing elit. Modi,
        molestias!
      </h2>
      <button>Buy Now</button>
    </div>
  </section>
      );
}
