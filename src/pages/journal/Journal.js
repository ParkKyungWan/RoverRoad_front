import React from 'react';

//scss
import './Journal.scss';

//image
import colorLogo from "images/colorLogo.svg";
import sampleThumnail from "images/journal/SampleThumnail.svg";

//component
import JournalItem from "./JournalItem";
import MainNav from 'pages/common/nav/mainNav';

export default function Journal(){

    let sample = {
        "title" : ["지금 바로 떠나자", <br key="0"/>,"인기 휴양지 총 집합"],
        "subtitle" : ["다시는 없을 2022년 여름 휴가!",<br key="0"/>,"어디로 가는 것이 가장 좋을까요?"],
        "thumnail" : sampleThumnail
    }

    return(
        <div>
            <div className='journal entire'>
                <img id="logo" src={colorLogo} />
                <div className='journal items'>
                    <JournalItem item={sample} />
                    <JournalItem item={sample} />
                    <JournalItem item={sample} />
                </div>
            </div>
            < MainNav now='journal'/>
        </div>
    )
}
