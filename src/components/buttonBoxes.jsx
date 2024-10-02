import { useContext, useMemo } from 'react';
import { questionsAnswers } from '../gameData/questionsAnswers';
import { MyContext } from '../context/myContext';

let randomQuestion = Math.floor(Math.random()*3);

export const ButtonBoxes = () => {

  const { setModalContent, setModalOn, currentBoxButtonsOn, currentBoxButtonsResolved } = useContext(MyContext);

  const onOffResolvedClassName = (e)=>{

    //Cada ButtonBoxes puede tener 3 estilos: oculto(aun no es visible por el jugador), visible(es el ButtonBoxes 
    //sobre el cual esta el jugador actualmente) y resuelto(son los ButtonBoxes por los que el jugador ya pasó), esta 
    //función se encarga de gestionar cual estado tendra cada ButtonBoxes

    if(currentBoxButtonsOn[e]) {return 'boxButtonOn'} 

    else if(currentBoxButtonsResolved[e]) {return 'boxButtonResolved'}

    else {return 'boxButtonOff'}

  };


  const tribia = useMemo( ()=> questionsAnswers(),[] );

  const onClickShowTribia = (e)=>{

    const { question, answers, correctAnswer, id, newButtonBox } = e; 

    setModalContent( { answers, correctAnswer, question, id, newButtonBox } );
    setModalOn(true)
  };

  return (

    <>
      <div className ='tribiaTable'>
        <section className = 'tribiaTable__tribiaGrid'>

          { tribia.map((e)=> 
            <div className ='tribiaTable__BoxButtonContainer' key = { e[randomQuestion].id }>

              <button 
                      onClick = {()=> onClickShowTribia( e[randomQuestion] )}
                      className = { `tribiaTable__${onOffResolvedClassName(e[randomQuestion].id)}`}
                      ></button>

            </div>
            ) }

        </section>
      </div>
    </>
    
  )
}
