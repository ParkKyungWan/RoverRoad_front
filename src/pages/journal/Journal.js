import React from 'react';

//scss
import './Journal.scss';

//image
import colorLogo from "images/colorLogo.svg";
import sampleThumnail from "images/journal/SampleThumnail.svg";

//component
import JournalItem from "./JournalItem";

export default function Journal(){

    let sample = {
        "title" : ["지금 바로 떠나자", <br key="0"/>,"인기 휴양지 총 집합"],
        "subtitle" : ["다시는 없을 2022년 여름 휴가!",<br key="0"/>,"어디로 가는 것이 가장 좋을까요?"],
        "thumnail" : sampleThumnail,
        "content" : ["봄이 헤는 별빛이 지나고 오는 하나에 버리었습니다. 불러 아침이 어머니, 하나에 까닭이요, 오면 계십니다. 많은 이름자를 까닭이요, 계십니다. 아침이 다 못 보고, 버리었습니다. 새겨지는 흙으로 멀리 가을 풀이 어머니 릴케 시인의 까닭입니다. " , <br key="0"/> ,<br key="1"/>
        ,"이름과, 가득 헤일 피어나듯이 아이들의 잠, 내 책상을 있습니다. 잔디가 가난한 그리워 하나에 피어나듯이 하나에 보고, 계십니다", <br key="2"/> ,<br key="3"/>,"비둘기, 보고, 새워 이름과, 하나에 아스라히 라이너 아이들의 까닭입니다. 토끼, 흙으로 무성할 별에도 강아지, 있습니다. 위에 걱정도 어머님, 겨울이 봅니다. 가을로 내 어머님, 이국 자랑처럼 강아지, 있습니다"]
        
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
        </div>
    )
}
