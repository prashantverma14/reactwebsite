import React from 'react';
import "./services.css";
import service1 from "../assests/Services1.png";
import service2 from "../assests/Services2.png";
import service3 from "../assests/Services3.png";


export default function Services()  {
  return (
    <section id="services">
        <div className="title">
            <h1 className="yellow">What We Do?</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
          incidunt magnam labore ipsam vero minima maxime doloribus dolores ipsa
          soluta</p>
        </div>

        <div className="services">


            <div className="service">
                <img src={service2} alt="service snap" />
                <p>he printing the data and 'prop-types'
                <span>lorem ipsum</span>{" "}has been tried to industry
                </p>
                <button>Read More</button>
            </div>

            <div className="service yellow">
                <img src={service1} alt="service snap" />
                <p>he printing the data and 'prop-types'
                <span>lorem ipsum</span>{" "}has been tried to industry
                </p>
                <button>Read More</button>
            </div>

            <div className="service">
                <img src={service3} alt="service snap" />
                <p>he printing the data and  'prop-types'
                <span>lorem ipsum</span>{" "}has been tried to industry
                </p>
                <button>Read More</button>
            </div>
        </div>
    </section>
  );
}
