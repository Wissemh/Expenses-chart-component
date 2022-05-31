import React from "react";
import "./Vertical.Component.css"

export default function Vertical (props) {
    const styles ={
        height: (props.amount * 40 /100 ).toString()+"vh"
    }
    return (
        <div className="vertical--container">
            <div className="amount">{`$${props.amount}`} </div>
            <div style={styles} className="vertical">

            </div>
            <div className="day">
                {props.day}
            </div>
        </div>
    )
}