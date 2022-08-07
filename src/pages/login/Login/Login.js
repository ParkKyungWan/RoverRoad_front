import React from 'react';
import { useNavigate } from 'react-router-dom';

//scss
import './Login.scss';

//components
import LoginForm from './LoginForm';
//image
import colorLogo from "images/hero/colorLogo.svg"
export default function Login(){

    let navigate = useNavigate();
    function toHome(){
        navigate("/");
    }

    return(
        <div className='login entire'>
            <img id="logo" src={colorLogo} onClick={toHome} />
            <LoginForm/>
            <div className='findQ'>
                <a href="">계정이 없으신가요?</a>
            </div>
        </div>
    )
}
