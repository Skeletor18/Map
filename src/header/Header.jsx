import React from "react";
import "./header.css";

const Header = () => {
  return (
    
    <header>
      <span>Cover</span>
      <div className="link">
        <a href="/home">Home</a>
        <a href="/features">Features</a>
        <a href="/contact">Contact</a>
      </div>
    </header>
  );
};

export default Header;
