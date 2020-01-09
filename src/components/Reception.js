import React from 'react';
import Posts from './Posts';
import Postform from './Postfrom'
import {Provider} from'react-redux'
// import { createStore,applyMiddleware } from 'redux';
import store from './store'



const Reception = () => {
    
    return ( 
        <Provider store={store}>
        <div>
        <Postform/> 
        <Posts/>
         
        </div>
        </Provider>
     );
}
 
export default Reception;