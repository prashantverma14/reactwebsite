import React from 'react';
import avatar1 from "../assests/avatar1.jpeg";
import "./testimonia.css";


export default function Testimonials() {
  return (
    <section id="testimonials">
    <div className="container">
      <div className="title">
        <h1>
          <span>What</span> Customers Says
        </h1>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <div className="image">
            <img src={avatar1} alt="" />
          </div>
          <p>
            He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
            has been the Industry's
          </p>
        </div>
        <div className="testimonial">
          <div className="image">
            <img src={avatar1} alt="" />
          </div>
          <p>
            He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
            has been the Industry's
          </p>
        </div>
        <div className="testimonial">
          <div className="image">
            <img src={avatar1} alt="" />
          </div>
          <p>
            He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
            has been the Industry's
          </p>
        </div>
      </div>
    </div>
  </section>
  );
}
