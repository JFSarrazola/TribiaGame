import { Modal, ButtonBoxes, ButtonDirections, WinLoseScreen } from './components';
import { MyProvider } from './context/myProvider';

import './styles/tableStyle.css'
import './styles/buttonBoxStyle.css';
import './styles/directionStyle.css';
import './styles/tableStyle.css';
import './styles/modalStyle.css';
import './styles/gameStyle.css';
import './styles/winLoseStyle.css';

export const Main = () => {
  
  return (

    <MyProvider>
    
        <WinLoseScreen/>

        <Modal/>
      
        <div className='table'>

            <ButtonBoxes/>

            <ButtonDirections/>
            
        </div>       

    </MyProvider>

  )
}
