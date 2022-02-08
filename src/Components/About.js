import React from "react"
import Navbar from "./Navbar"
import experienceImage from "./Images/experience.png"

export default function About() {
    return(
        <div>
            <div className="title">
                about
            </div>
            <Navbar />
            <div className="home-image">
                <img src={experienceImage} alt="A timeline of Ally Nickell's different careers and adventures and work history." height="700px"></img>
            </div>
        </div>
    )
}