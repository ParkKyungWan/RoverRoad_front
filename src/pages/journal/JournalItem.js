import React from 'react';

//scss
import './JournalItem.scss';


export default function Journal(props){

    return(
        <div className='journal-item'>
            <div className='textArea'>
                <h1>{props.item.title}</h1>
                <h2>{props.item.subtitle}</h2>
            </div>
            <img className="imageArea" src={props.item.thumnail}/>
        </div>
    )
}
