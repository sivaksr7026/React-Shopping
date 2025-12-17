import React from 'react'
import "./Electronics.css"
const Electronics = () => {
  return (
     <div className="best-deals-section">

      <div className="left-80">
        <h2>Best deals on smartphones</h2>

        <div className="product-row">
          <div className="product-card">
            <img src="assets/electronics/p1.png" alt="product" />
            <p>Apple iPhone 16</p>
            <span>From ₹55,999*</span>
          </div>

          <div className="product-card">
            <img src="assets/electronics/p2.png" alt="product" />
            <p>Vivo T4x 5G</p>
            <span>From ₹14,999*</span>
          </div>

          <div className="product-card">
            <img src="assets/electronics/p3.png" alt="product" />
            <p>Vivo T4 Lite 5G</p>
            <span>From ₹11,249*</span>
          </div>

          <div className="product-card">
            <img src="assets/electronics/p4.png" alt="product" />
            <p>OPPO K13 5G</p>
            <span>From ₹16,999*</span>
          </div>

          <div className="product-card">
            <img src="assets/electronics/p5.png" alt="product" />
            <p>Galaxy S24 FE 5G</p>
            <span>From ₹31,999*</span>
          </div>
        </div>
      </div>

      <div className="right-20">
        <img src="assets/electronics/pp.png" alt="offer" />
      </div>

    </div>
  )
}

export default Electronics