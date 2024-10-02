import { MyContext } from '../context/myContext';
import { useContext, useEffect, useState } from 'react';

import win from '../images/win.png';
import lose from '../images/lose.png';

export const WinLoseScreen = ( )=>{

    const { playersLife,winnScreenOn,setWinnScreenOn } = useContext(MyContext);

    const [ playerLose, setPlayerLose ] = useState( false );
    

    useEffect(() => {

        if( playersLife === 0) { 
            setWinnScreenOn(true);
            setPlayerLose(true) 
        };

    }, [ playersLife ])
    
    return (
        winnScreenOn && 
        <div className='WinLoseContainerOn'>
            <div className='WinLoseContainerOn__grid'>

                <img src = { playerLose ? lose : win }
                     className='WinLoseContainerOn__image'/>

                <button onClick = {() => window.location.reload(true) }
                        className = { playerLose ? 
                            'WinLoseContainerOn__buttonlose':
                            'WinLoseContainerOn__buttonwin'
                         }>REINICIAR
                </button>

            </div>
        </div>
    )
}
