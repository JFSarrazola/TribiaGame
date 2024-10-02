export const reducer = ( state, action )=>{
    // Reducer encargado de administrar la cantidad de direcciones a las que se puede desplazar desde la casilla actual
    // tambien especifica cada casilla a la cual se puede desplazar.
    // La propiedad NewButtonBox se usa solo en las casillas con una unica dirección, las propiedades
    // downButtonBox,rightButtonBox,upButtonBox,leftButtonBox se usan solo en las casillas con 2 o más direcciónes

    switch( action.type ){

        case 'obj1_option1':
        case 'obj1_option2':
        case 'obj1_option3':
            return ({   
                        rightOn:'directionTable__rightOn',
                        directionsQuantity: 1, 
                        newButtonBox: { 'obj2_option1':true, 
                                        'obj2_option2':true, 
                                        'obj2_option3':true }

            });break;


        case 'obj2_option1':
        case 'obj2_option2':
        case 'obj2_option3':
            return ({   
                        rightOn:'directionTable__rightOn',
                        directionsQuantity: 1, 
                        newButtonBox: { 'obj3_option1':true,
                                        'obj3_option2':true, 
                                        'obj3_option3':true },
                    
            });break;


        case 'obj3_option1':
        case 'obj3_option2':
        case 'obj3_option3':
            return ({   
                        rightOn:'directionTable__rightOn', 
                        downOn:'directionTable__downOn',
                        directionsQuantity: 2,
                        downButtonBox: { 'obj7_option1':true,
                                         'obj7_option2':true, 
                                         'obj7_option3':true },

                        rightButtonBox: { 'obj4_option1':true, 
                                          'obj4_option2':true, 
                                          'obj4_option3':true }

            });break;


        case 'obj4_option1':
        case 'obj4_option2':
        case 'obj4_option3':
            return ({  
                        downOn:'directionTable__downOn',
                        directionsQuantity: 1, 
                        newButtonBox: { 'obj8_option1':true, 
                                        'obj8_option2':true, 
                                        'obj8_option3':true } 

            });break;


        case 'obj5_option1':
        case 'obj5_option2':
        case 'obj5_option3':
            return ({  
                        downOn:'directionTable__downOn',
                        directionsQuantity: 1, 
                        newButtonBox: { 'obj9_option1':true, 
                                        'obj9_option2':true, 
                                        'obj9_option3':true } 

            });break;


        case 'obj6_option1':
        case 'obj6_option2':
        case 'obj6_option3':
            return ({   
                        leftOn:'directionTable__leftOn', 
                        directionsQuantity: 1,
                        newButtonBox: { 'obj5_option1':true, 
                                        'obj5_option2':true, 
                                        'obj5_option3':true }

            });break;


        case 'obj7_option1':
        case 'obj7_option2':
        case 'obj7_option3':
            return ({   
                        leftOn:'directionTable__leftOn', 
                        downOn:'directionTable__downOn',
                        directionsQuantity: 2,
                        downButtonBox: { 'obj11_option1':true, 
                                         'obj11_option2':true, 
                                         'obj11_option3':true }, 

                        leftButtonBox: { 'obj6_option1':true, 
                                         'obj6_option2':true, 
                                         'obj6_option3':true } 

            });break;


        case 'obj8_option1':
        case 'obj8_option2':
        case 'obj8_option3':
            return ({   
                        leftOn:'directionTable__leftOn', 
                        downOn:'directionTable__downOn',
                        directionsQuantity: 2,
                        downButtonBox: { 'obj12_option1':true, 
                                         'obj12_option2':true, 
                                         'obj12_option3':true }, 

                        leftButtonBox: { 'obj7_option1':true, 
                                         'obj7_option2':true, 
                                         'obj7_option3':true } 

            });break;

        case 'obj9_option1':
        case 'obj9_option2':
        case 'obj9_option3':
            return ({   
                        downOn:'directionTable__downOn',
                        directionsQuantity: 1, 
                        newButtonBox: { 'obj13_option1':true, 
                                        'obj13_option2':true, 
                                        'obj13_option3':true } 

            });break;
                
                
        case 'obj10_option1':
        case 'obj10_option2':
        case 'obj10_option3':
            return ({   
                        leftOn:'directionTable__leftOn', 
                        upOn:'directionTable__upOn',
                        directionsQuantity: 2,
                        upButtonBox: { 'obj6_option1':true, 
                                       'obj6_option2':true, 
                                       'obj6_option3':true },

                        leftButtonBox: { 'obj9_option1':true, 
                                         'obj9_option2':true, 
                                         'obj9_option3':true } 

            });break;
            
            
        case 'obj11_option1':
        case 'obj11_option2':
        case 'obj11_option3':
            return ({   
                        leftOn:'directionTable__leftOn', 
                        upOn:'directionTable__upOn',
                        directionsQuantity: 2,
                        upButtonBox: { 'obj7_option1':true, 
                                       'obj7_option2':true, 
                                       'obj7_option3':true },

                        leftButtonBox: { 'obj10_option1':true, 
                                         'obj10_option2':true, 
                                         'obj10_option3':true } 

            });break;
            
            
        case 'obj12_option1':
        case 'obj12_option2':
        case 'obj12_option3':
            return ({   
                        leftOn:'directionTable__leftOn',
                        directionsQuantity: 1, 
                        newButtonBox: { 'obj11_option1':true,   
                                        'obj11_option2':true, 
                                        'obj11_option3':true } 

            });break;


        case 'obj13_option1':
        case 'obj13_option2':
        case 'obj13_option3':
            return ({ });break;

    }


}