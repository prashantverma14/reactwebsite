import React from 'react';
import "./foot.css";
import logo from "../assests/FoodYummy.png";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

export default function Footer() {
  return (
    <div className="footer">
    <section className="upper">
      <div className="brand container">
        <img src={logo} alt="" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
          repudiandae.
        </p>
        <ul>
          <li>
            <AiFillInstagram />
          </li>
          <li>
            <FaFacebookF />
          </li>
          <li>
            <GrLinkedinOption />
          </li>
          <li>
            <BsTwitter />
          </li>
        </ul>
      </div>
      <div className="about container">
        <div className="title">
          <h3>About Us</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          eligendi repellat laudantium blanditiis iure nulla, ut aliquam
          itaque unde nesciunt cum veritatis perferendis vel expedita! Nam
        </p>
      </div>
      <div className="contact container">
        <div className="title">
          <h3>Contact Us</h3>
        </div>
        <p>+91 1231231231</p>
        <p>foodyummy@gmail.com</p>
        <p>@foodyummy</p>
        <p>412 Street, Ground Floor, India</p>
      </div>
    </section>
    <section className="lower__footer">
      <h2>
        Copyright &copy; 2021 <span>Food Yummy</span>
      </h2>
    </section>
  </div>
  );
}


