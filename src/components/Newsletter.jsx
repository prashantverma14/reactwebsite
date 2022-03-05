import React from 'react';
import "./news.css";

export default function Newsletter() {
  return (
    <section id="newsletter">
      <div className="title">
        <h1>
          <span>Subscribe</span> Newsletter
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quas
          perferendis nesciunt illum, voluptas nulla laborum alias similique
          praesentium quam.
        </p>
      </div>
      <div className="container">
        <input type="text" placeholder="Search for food ..." />
        <button>Search</button>
      </div>
    </section>
  );
}
