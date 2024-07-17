// Create component to hold Icon
// Using react hooks
import React, { useEffect, useState } from "react";
// Import axios
import axios from "axios";
// Import image
import Gift from '../assets/gift-image.jpg';

function Icon() {
  return (
    <div className="reward-bringer">
      <div className="icon-picture">
        <img src={Gift} alt="Gift Box" />
      </div>
    </div>
  );
}

export default Icon;
