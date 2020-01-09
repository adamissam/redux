import {AXIOS_GET, NEW_POST} from './types'
import axios from 'axios'
import { useDispatch } from 'react-redux'



export const axiosGet = () => dispatch =>{
    
    console.log('Réception des données')
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res =>dispatch({
           type: AXIOS_GET,
           payload:res.data
        }))
        .catch(error => console.log(error))
        
    }
    
    // export constAxiospost = (postData) =>dispatch =>{
        //     console.log('envoie donndés')
        //         axios.post('https://jsonplaceholder.typicode.com/posts',
        //         item
        //         )
        //        .then(res =>dispatch((res.data){
            //            type: NEW_POST,
            //            payload:res.post
            //        }))
            //        .catch(error => console.log(error))
    
// }

const Axiospost = postData =>{
    
    const dispatch = useDispatch()
    console.log('Jean de la jungle')
    
    
    console.log('Données envoyé')
    axios.post('https://jsonplaceholder.typicode.com/posts', {postData})
    .then(response=>console.log(response.data))
    .then(response =>  
        dispatch({
            type:NEW_POST,
            payload:response
            
        })
        )
        .catch(error => {
          throw(error);
        });
return("")
    }
        
    
    export default Axiospost
