import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="main-container">
        <div className="inner-container">
          <div className="left">
            <Link to="/"><img width="265" height="70" src="https://medwander.com/wp-content/uploads/2024/05/Logo-Final_2-1024x272.png" ></img></Link>
          </div>
          <div className="right">
            <button className="quote-button">Get a free quote</button>
          </div>
        </div>
    </div>
  )
}

export default Navbar