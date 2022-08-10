import { React, useEffect, useState } from 'react';

//scss
import './NavBar.scss';

//component
import ScrollContainer from 'react-indiana-drag-scroll';

//images
import calander from "images/common/mainNav/calander.svg";
import guider from "images/common/mainNav/guider.svg";
import journal from "images/common/mainNav/journal.svg";
import travel  from "images/common/mainNav/travel.svg";

export default function MainNav(props){
    
    
    const [ now, setNow ] = useState(props.now);
    const clickItems = document.getElementsByClassName('selectArea');

    function changePage( type ) {
        setNow( type );
    } 

    useEffect( () => {
        for( let i = 0 ; i < 5; i++ ){
            if( i!= now ){
                clickItems[i].style.filter = "saturate(20%)";
                clickItems[i].style.cursor = "pointer";
            }else{
                clickItems[i].style.filter = "none";
                clickItems[i].style.cursor = "default";
            }
        }
        props.setPage(now);
    },[now]);

    return(
        <div className='main-nav'>
            <ScrollContainer className='scroll-container'>
                <div className='main-nav-flex'>
                    <div className='selectArea' onClick={() => changePage(0)} >
                        <img className='icon' src={journal}  />
                        <p>저널</p>
                    </div>
                    <div className='selectArea' onClick={() => changePage(1)}>
                        <img className='icon' src={calander}/>
                        <p>일정 생성</p>
                        
                    </div>
                    <div className='selectArea' onClick={() => changePage(2)}>
                        <img className='icon' src={guider}/>
                        <p>가이더</p>
                        
                    </div>
                    <div className='selectArea' onClick={() => changePage(3)}>
                        <img className='icon' src={travel}/>
                        <p>트래블 타입</p>
        
                    </div>
                    <div className='selectArea' onClick={() => changePage(4)}>
                        <div className='icon'><div className='my' /></div>           
                        <p>MY</p>
                        
                    </div>
                </div>
            </ScrollContainer>
        </div>
    )
}
