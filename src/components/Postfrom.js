import React, { useState } from 'react';
import {connect, useSelector, useDispatch} from 'react-redux'
importAxiospost from '../actions/postActions'
import Axios from 'axios';


const Postform = () =>{
    const [title,setTitle]= useState('')
    const [body, setBody] = useState('')


    const handleChangeTitle = (e) =>{
        setTitle(e.target.value)
    }

    const handleChangeBody = (e) =>{
        setBody(e.target.value)
    }

    const handleClick = (e) =>{
        e.preventDefault()
        const post = {
            title:`${title}`,
            body:`${body}`,
            
        
        }
        console.log("method handleClick")
        console.log(post)
        // const dispatch = useDispatch()
       Axiospost(post)
        
    }
const pos = useSelector(state => state.envoie.item)
    return(
        <div>
            <h1>Add Post</h1>



            <form onSubmit={handleClick}>
                <div>
                    <label>Title : </label><br/>
                    <input type='text' name='title' value={title} onChange={(e)=> handleChangeTitle(e)} />
                </div>
                <div>
                    <label>Body : </label><br/>
                    <input type='text' name='body' value={body} onChange={(e)=> handleChangeBody(e)}/>
                </div>
                <button type='submit'>Submit</button>
                
            </form>

        </div>
    )
}

export default connect(null,{AxiosPost})(Postform)