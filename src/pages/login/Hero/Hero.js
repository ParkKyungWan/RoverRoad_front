import React from 'react';

//scss
import './Hero.scss'

//image
import logo from "images/hero/logo.svg"

//components
import LoginBar from './LoginBar';

export default function Hero(){
    return(
        <div>
            <img className="logo" src={logo}/>
            <div className="hero entire">
                <div className="mainImage flex-item"/>
                <div className="mainBar flex-item">
                    <LoginBar/>
                </div>
            </div>
        </div>
    )
}
