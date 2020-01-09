import {AXIOS_GET, NEW_POST} from '../../actions/types'

const initialState = {
    items:[],
    item:{}
}

const postReducer = (state = initialState,action)=>{
     switch (action.type){
         case AXIOS_GET:
             console.log('Réception des données dans le reducer')
             return{
                 ...state,
                 items:action.payload
             };
        case NEW_POST:
            return {
                ...state,
                item:action.payload
            }
         default:
             return state
     }
}

export default postReducer