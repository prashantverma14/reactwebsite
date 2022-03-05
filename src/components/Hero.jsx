import React from 'react';
import "./hero.css";
import hero from "../assests/hero.jpg";
import herodesign from "../assests/HeroDesign.png"; 


export default function Hero()  {
  return (
    <section id="home">
        <div className="background">
            <img src={hero} alt="Background" />
        </div>
        <div className="content">
            <div className="sale">
                <img src={herodesign} alt="" />
                <h1><strong><strong>
                    BIG SALE
                    <span>50% OFF</span>
                </strong></strong></h1>
            </div>
            <div className="info">
                <div className="retail">RETAILER</div>
                <div className="lorem"><em>Lorem, ipsum do the world across the globe is round in shape</em></div>
               <div><button>ORDER NOW</button></div> 
            </div>
          </div>
     

    </section>
  );
}

