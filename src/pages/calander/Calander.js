import React from 'react';

//scss
import './Calander.scss';

//image
import newButton from 'images/calander/newButton.svg';

export default function Calander(){

    return(
        <div>
            <div className='calander entire'>
                <div className='title-box'>
                <img src={newButton} className="new-button push" />
                    <h1>일정 만들기</h1>
                </div>
                <h2>직접 만든 일정</h2>
                <h2>자동으로 기록한 여행</h2>
            </div>
        </div>
    )
}
