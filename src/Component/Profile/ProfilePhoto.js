import React from "react";
import './profile.css'
const Photo = require("../profilepic.jpg")

export default function Pic(params) {
    return (
        <div>
            <img className="pic" src={Photo} alt="profile_pic" />
        </div>
    )
}