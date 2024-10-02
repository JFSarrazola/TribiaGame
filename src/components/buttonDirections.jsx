import { useContext } from "react";
import { MyContext } from "../context/myContext";

export const ButtonDirections = () => {

  const { directions, setDirections, setCurrentBoxButtonsOn } = useContext(MyContext);
    const onclickDirections = ({ target })=>{

      // Esta funcion verifica si la propiedad directionsQuantity es menor a dos si lo es significa que directions tiene una
      // propiedad llamada newButtonBox por lo que simplemente agregara su valor a currentBoxButtonsOn.

      // Si currentBoxButtonsOn es mayor a 1 significa que hay más de una ruta que el jugador puede tomar y directions
      // tendra 2 o más de estas propiedades: newButtonBox,downButtonBox,rightButtonBox,upButtonBox, leftButtonBox
      // los id que se agregaran a currentBoxButtonsOn dependeran de a cual boton de direccion se haga click.

      const { newButtonBox, directionsQuantity,downButtonBox,rightButtonBox,upButtonBox,leftButtonBox } = directions;

      if( directionsQuantity < 2 ) { setCurrentBoxButtonsOn( {...newButtonBox } ) }

      else{

        switch( target.id ){

          case 'upButton' : setCurrentBoxButtonsOn( {...upButtonBox } );break;

          case 'leftButton' : setCurrentBoxButtonsOn( {...leftButtonBox } );break;

          case 'rightButton' : setCurrentBoxButtonsOn( {...rightButtonBox } );break;

          case 'downButton' : setCurrentBoxButtonsOn( {...downButtonBox } );break;

        }


      }

      setDirections({})

    }

  return (

    <>
      <div className="directionTable">
        <div className = 'directionTable__container'>

          <button id = 'upButton' 
                  className = { directions.upOn || 'directionTable__upOff' } 
                  onClick = {  onclickDirections } ></button> 

          <div  className='directionTable__leftRight'> 
              
              <button   id = 'leftButton' 
                        className = { directions.leftOn || 'directionTable__leftOff' } 
                        onClick = { onclickDirections }></button>

              <button   id = 'rightButton' 
                        className = { directions.rightOn || 'directionTable__rightOff' } 
                        onClick = { onclickDirections }></button>

          </div>

          <button id = 'downButton' 
                  className={ directions.downOn || 'directionTable__downOff' } 
                  onClick = { onclickDirections }></button>

        </div>
      </div>
    </>
    
  )
}
