import React from "react";
import HomeCSS from "../styles/Home.module.css"
import video from '../assets/video1.mp4'
import { Link } from 'react-router-dom'
import GetStarted from './GetStarted.js'

function Home() {
    return(
        <div className={HomeCSS.container}>
            <video src={video} autoPlay loop muted/>
            <div className={HomeCSS.content}>
                <h1 className={HomeCSS.title}> From Ingredients to Inspiration</h1>
                <h2 className={HomeCSS.subTitle}> Your Personal Recipe Wizard </h2>
                <Link to='/Get-Started' className={HomeCSS.getStarted}> Get Started </Link>
            </div>
        </div>
    )
}

export default Home