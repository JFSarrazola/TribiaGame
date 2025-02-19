import {useState} from 'react'
import { MyContext } from './myContext'

export const MyProvider = ({ children }) => {

    const [ modalControl , setModalControl] = useState( { modalContent:{}, modalOn:false} );
    // Este estado gestiona el componente modal,la propiedad modalContent se encarga de agregar el contenido que se mostrara 
    // en sus etiquetas y la propiedad modalOn se engarga de ocultar o mostrar el componente modal
  

    const [ directions, setDirections ] = useState({}); 
    // Despues de que el jugador responda correctamente a la ultima pregunta este estado pasa a tener las propiedades que  
    // permiten al componente ButtonDirections gestionar las direcciones a las que el jugador puede moverse,los valores
    // de este objeto los determina un reducer ubicado en gamedata/reducer.js y es usado por el componente Modal.

    const [ winnScreenOn, setWinnScreenOn ] = useState( false );
    // este estado gestiona el momento en que se puede dibujar el componente que informa al jugador si ganó o perdio el juego.


    const [ boxButtonStyle, setBoxButtonStyle] = useState({ currentBoxButtonsOn:{
                                                            'obj1_option1': true,
                                                            'obj1_option2': true,
                                                            'obj1_option3': true },
                                                            currentBoxButtonsResolved:{}})
    //  Este estado se encarga de guardar el boton que esta activo actualmente(currentBoxButtonsOn) el cual siempre es solo 1 y 
    //  los botones que ya se han usado (currentBoxButtonsResolved) estos ultimos se bloquearan para evitar que sean usados otra vez
                                                     

 
    const [ playersLife, setPlayersLife ] = useState( 3 );
    // si el jugador responde mal a una pregunta a este estado se le restara 1, si el estado llega a 0 el juego terminara
    // actualizando el estado winnScreenOn.


  return (

    <MyContext.Provider value = {{
        modalControl, setModalControl,
        directions, setDirections,
        winnScreenOn, setWinnScreenOn,
        playersLife, setPlayersLife,
        boxButtonStyle,setBoxButtonStyle
    }}>
        { children }
    </MyContext.Provider>

  )
}
