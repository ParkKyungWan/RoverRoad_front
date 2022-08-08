import { React, useState} from 'react';

//scss
import './JournalItem.scss';

//image
import arrowback from 'images/arrow_back.svg';

export default function Journal(props){
    const [isActive, setIsActive] = useState(0);
    const toActive = () => {
        if(!isActive){
            window.scrollTo(0,0);
            setIsActive(1);
        }
    }
    const inActive = () => {
        if(isActive){
            setIsActive(0);
        }
    }
    return(
        <div className={"journal-item" + ( isActive ? " active" : "") } onClick={toActive}>
            <div className='textArea'>
                { isActive? <img src={arrowback} className='arrowback' onClick={inActive}/> : "" }
                <h1>{props.item.title}</h1>
                <h2>{props.item.subtitle}</h2>
            </div>
            <img className="imageArea" src={props.item.thumnail}/>
            <div className='contentArea'>{ isActive ? props.item.content : "" }</div>
        </div>
    )
}
