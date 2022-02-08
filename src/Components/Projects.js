import React from "react"
import Navbar from "./Navbar"
import ImageGallery from "react-image-gallery"
import img1 from "./Images/1.png"
import img2 from "./Images/2.png"
import img3 from "./Images/3.png"
import img4 from "./Images/4.png"
import img5 from "./Images/5.png"
import img6 from "./Images/6.png"

const images = [
    {
        original: img1,
        thumbnail: img1
    },
    {
        original: img2,
        thumbnail: img2
    },
    {
        original: img3,
        thumbnail: img3
    },
    {
        original: img4,
        thumbnail: img4
    },
    {
        original: img5,
        thumbnail: img5
    },
    {
        original: img6,
        thumbnail: img6
    }
]




export default function Projects() {
    return(
        <div>
            <div className="title">
               projects
            </div>
            <Navbar />
            <div className="gallery">
                <ImageGallery items={images}  />
            </div>
           
        </div>
    )
}