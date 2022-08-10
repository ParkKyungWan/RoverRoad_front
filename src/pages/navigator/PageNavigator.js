import {React, useEffect, useState} from 'react';

//component
import NavBar from './nav/NavBar';
import Journal from 'pages/journal/Journal';
import Calander from 'pages/calander/Calander';

export default function PageNavigator(props){
    
    const [ now, setNow ] = useState( props.now );
    const mainComponents = [
        <Journal/>, < Calander />
    ]
    const changePage = ( type ) => {
        setNow( type );
    }

    return(
        <div>
            {mainComponents[now]}
            <NavBar now={props.now} setPage={changePage} />
        </div>
    )
}
