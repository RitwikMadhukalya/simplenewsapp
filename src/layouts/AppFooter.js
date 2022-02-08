import React from "react";
import { AiFillHeart } from "react-icons/ai";
import "./AppFooter.css";

const AppFooter = () => {
  return (
    <div className="app-footer">
      <h5 style={{ textAlign: "center" }}>
        Made with <AiFillHeart /> by Ritwik Madhukalya
      </h5>
    </div>
  );
};

export default AppFooter;
