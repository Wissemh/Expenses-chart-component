import React from "react";
import "./Header.Component.css";

export default function Header () {
    return (
        <header>
            <div className="left">
                <span className="balance">My balance</span>
                <span className="value">$921.48</span>
            </div>
            <div className="right">
                <div className="empty">

                </div>
                <div className="full">

                </div>
            </div>
        </header>
    )
}