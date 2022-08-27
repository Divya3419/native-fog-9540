import React from "react";
import { Link } from "react-router-dom";

import { Success_div } from "./Success_style";

const Success = () => {
  return (
    <Success_div>
      <div className="container1">
        <div>
          <div className="imageee">
            <img src="https://www.clipartmax.com/png/full/179-1795386_patient-success-success-icon-png.png" />
          </div>
          <h1>Thank you for your purchase!</h1>
          <br></br>
          <h4>
            Your order id:{" "}
            <span id="order">{Math.round(Math.random() * 3311000)}</span>
          </h4>
          <br></br>
        </div>
        <div>
          <Link to="/">Continue Shopping</Link>
        </div>

        <div />
      </div>
    </Success_div>
  );
};

export default Success;
