import React from "react";
import logo from "./images/Troll Face.svg"

export default function Header(){
    return(
    <div>
    <div className="header">
        <div className="left-header">
        <img src={logo} className='logo'/>
        <h1>Meme Generator</h1>
        </div>
        <h3>React Course - Project 3</h3>
    </div>
    </div>
    )
}