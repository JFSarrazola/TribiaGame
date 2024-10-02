import { useContext, useEffect, useReducer, useState } from "react";
import { reducer } from '../gameData/reducer';
import { MyContext } from "../context/myContext";

export const Modal = () => {

  const {   modalContent, modalOn, setModalOn, 
            setDirections, playersLife, 
            setPlayersLife, setWinnScreenOn,
            setCurrentBoxButtonsOn,
            currentBoxButtonsResolved,
            setCurrentBoxButtonsResolved,
            currentBoxButtonsOn } = useContext(MyContext);

  const{ question, answers, correctAnswer, id } = modalContent;

  const [ directions , dispatch] = useReducer( reducer, {} );

  const [lockScreen, setLockScreen] = useState(false) //Despues de contestar la pantalla se "bloqueara" por un momento 
                                                      //para evitar que se escoja más de una respuesta por intento.

  
  useEffect(() => { 

    setDirections(directions)

  }, [ directions ]);
  

  const checkAnswer = ( { target } ) => {

    if( target.innerHTML.trim() === correctAnswer.trim() ){

      if(id == 'obj13_option1' || id == 'obj13_option2' || id == 'obj13_option3'){
        //Esta condición solo aplica para la ultima casilla.
        target.style.background = 'radial-gradient(circle,#126319 ,#0f3012,#0a160b)';
        setLockScreen(true);
        setTimeout(() => {
          setWinnScreenOn(true);
          setModalOn(false);
          setLockScreen(false);
        }, 1000)
      }

      else{
        target.style.background = 'radial-gradient(circle,#126319 ,#0f3012,#0a160b)';
        setLockScreen(true)
        setTimeout(() => {
          setModalOn(false);
          setCurrentBoxButtonsResolved( {...currentBoxButtonsResolved,...currentBoxButtonsOn})
          dispatch({ type: id });
          setCurrentBoxButtonsOn({})
          setLockScreen(false)
        }, 1000)
      }
    }

    else{
      target.style.background = 'radial-gradient(circle,#c40b0b ,#840606,#5b0303)';
      setLockScreen(true)
      setTimeout(() => {
        setPlayersLife(playersLife - 1);
        setModalOn(false);
        setLockScreen(false)
    }, 1000); 

    }
  };

  return (
    
    modalOn&&
    <>
        { lockScreen && <div className="modalOn__block"></div>}
        <div className = 'modalOn'>

        <h3 className="modalOn__questionBox"> { question } </h3> 

        <div className="modalOn__answerButtons">

            { answers.map( ( mapAnswer ) => 
            
            <button key = { mapAnswer } 
                    onClick = { checkAnswer }
                    className="modalOn__button"> { mapAnswer } 
            </button>
            
            ) }

        </div>
        </div>
    </>
  )
}
