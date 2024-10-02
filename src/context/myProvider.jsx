import {useState} from 'react'
import { MyContext } from './myContext'

export const MyProvider = ({ children }) => {

    const [ modalContent , setModalContent ] = useState( {  } );  
    // Este estado se actualiza cada vez que se da click en los botones buttonBoxes agregando propiedades del objeto
    // questionsAnswers ubicado en /gameData/questionsAnswers el cual contiene datos como preguntas y respuestas.

    const [ modalOn, setModalOn] = useState( false );  
    // este estado gestiona el momento en que se puede dibujar el componente que contiene la pregunta y sus posibles
    // respuestas.

    const [ directions, setDirections ] = useState({}); 
    // Despues de que el jugador responda correctamente a la ultima pregunta este estado pasa a tener las propiedades que  
    // permiten al componente ButtonDirections gestionar las direcciones a las que el jugador puede moverse,los valores
    // de este objeto los determina un reducer ubicado en gamedata/reducer.js y es usado por el componente Modal.

    const [ winnScreenOn, setWinnScreenOn ] = useState( false );
    // este estado gestiona el momento en que se puede dibujar el componente que informa al jugador si ganó o perdio el juego.

    const [ currentBoxButtonsOn, setCurrentBoxButtonsOn ] = useState( { 'obj1_option1': true,
                                                                        'obj1_option2': true,
                                                                        'obj1_option3': true,});
    // este estado contiene el id del ButtonBoxe que actualmente esta activo y con el cual el jugador puede interactuar.

    const [ currentBoxButtonsResolved, setCurrentBoxButtonsResolved] = useState({})
    // este estado contiene los id de los ButtonBoxes que ya han sido usados por el jugador, solo se agregara el id
    // si el jugador contesta de manera correcta.
 
    const [ playersLife, setPlayersLife ] = useState( 3 );
    // si el jugador responde mal a una pregunta a este estado se le restara 1, si el estado llega a 0 el juego terminara
    // actualizando el estado winnScreenOn.


  return (

    <MyContext.Provider value = {{
        modalContent , setModalContent ,
        modalOn, setModalOn,
        directions, setDirections,
        winnScreenOn, setWinnScreenOn,
        currentBoxButtonsOn, setCurrentBoxButtonsOn,
        playersLife, setPlayersLife,
        currentBoxButtonsResolved, setCurrentBoxButtonsResolved
    }}>
        { children }
    </MyContext.Provider>

  )
}
