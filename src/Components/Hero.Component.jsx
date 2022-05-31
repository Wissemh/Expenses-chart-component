import React from "react";
import "./Hero.Component.css"
import data from "./../data.js";
import Vertical from "./Vertical.Component.jsx";

export default function Hero () {
   const verticalElements = data.map(item => <Vertical key={item.id} day={item.day} amount={item.amount} />) 
    return(
    <div className="hero--container">
        <h2>Spending - Last 7 days</h2>
        <div className="verticals">
            {verticalElements}
        </div>
        <hr></hr>
        <footer>
            <div className="footer-left">
                <span className="span--color">Total this month</span>
                <h1>$478.33</h1>
            </div>
            <div className="footer-right">
                <p>+2.4%</p>
                <span className="span--color" >from last month</span>
            </div>
        </footer>
    </div>)
}