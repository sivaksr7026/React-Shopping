import React from 'react'
import "./Appliance.css"

const Appliance = () => {
  return (
    <div className='appliance-section'>

      <div className="left-small">
        <div className="small-grid">
          <img src="assets/appliance/a1.png" alt="img" />
          <img src="assets/appliance/a2.png" alt="img" />
          <img src="assets/appliance/a3.png" alt="img" />
          <img src="assets/appliance/a4.png" alt="img" />
        </div>
      </div>

      <div className="right-big">
        <img src="assets/appliance/abig.png" alt="Big" />
      </div>

    </div>
  )
}

export default Appliance;
