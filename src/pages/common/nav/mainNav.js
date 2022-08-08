import {React, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

//scss
import './mainNav.scss';

//component
import ScrollContainer from 'react-indiana-drag-scroll';

//images
import calander from "images/common/mainNav/calander.svg";
import guider from "images/common/mainNav/guider.svg";
import journal from "images/common/mainNav/journal.svg";
import travel  from "images/common/mainNav/travel.svg";

export default function MainNav(props){

    useEffect( () => {
        switch(props.now){
            case 'journal':
                document.getElementsByClassName('selectArea')[0].style.filter = "none";
                document.getElementsByClassName('selectArea')[0].style.cursor = "default";
                break;
            case 'calander':
                document.getElementsByClassName('selectArea')[1].style.filter = "none";
                document.getElementsByClassName('selectArea')[1].style.cursor = "default";
                break;
            case 'guider':
                document.getElementsByClassName('selectArea')[2].style.filter = "none";
                document.getElementsByClassName('selectArea')[2].style.cursor = "default";
                break;
            case 'travel':
                document.getElementsByClassName('selectArea')[3].style.filter = "none";
                document.getElementsByClassName('selectArea')[3].style.cursor = "default";
                break;
            case 'my':
                document.getElementsByClassName('selectArea')[4].style.filter = "none";
                document.getElementsByClassName('selectArea')[4].style.cursor = "default";
                break;
        }; });

    let navigate = useNavigate();
    function toJournal() {
        navigate("/journal");
    }
    function toCalander() {
        navigate("/calander");
    }
    function toGuider() {
        navigate("/guider");
    }
    function toTravel() {
        navigate("/travel");
    }
    function toProfile(){
        navigate("/profile");
    }

    return(
        <div className='main-nav'>
            <ScrollContainer className='scroll-container'>
                <div className='main-nav-flex'>
                    <div className='selectArea' onClick={toJournal}>
                        <img className='icon' src={journal}/>
                        <p>저널</p>
                    </div>
                    <div className='selectArea' onClick={toCalander}>
                        <img className='icon' src={calander}/>
                        <p>일정 생성</p>
                        
                    </div>
                    <div className='selectArea' onClick={toGuider}>
                        <img className='icon' src={guider}/>
                        <p>가이더</p>
                        
                    </div>
                    <div className='selectArea' onClick={toTravel}>
                        <img className='icon' src={travel}/>
                        <p>트래블 타입</p>
        
                    </div>
                    <div className='selectArea' onClick={toProfile}>
                        <div className='icon'><div className='my' /></div>           
                        <p>MY</p>
                        
                    </div>
                </div>
            </ScrollContainer>
        </div>
    )
}
