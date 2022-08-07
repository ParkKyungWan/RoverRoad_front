import React from 'react';
import { useNavigate } from 'react-router-dom';

//scss
import './Register.scss';

//image
import arrowback from 'images/arrow_back.svg';
import RegisterForm from './RegisterForm';


export default function Register(){

    let navigate = useNavigate();
    function toHome(){
        navigate("/");
    }

    return(
        <div className='register entire'>
			<img className="arrowback" src={arrowback} onClick={toHome} />
            <h1 className="welcomeMessage">ROVER ROAD에 오신 것을 환영합니다!</h1>
            <RegisterForm/>
        </div>
    )
}
