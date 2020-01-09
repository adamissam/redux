import React, { useEffect, useState } from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import {axiosPosts, axiosGet} from '../actions/postActions'
import propTypes from 'prop-types'



const Posts = ()=>{


    const posts = useSelector(state => state.envoie.items)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(axiosGet())
    },[]  )  
                    
         return (
            <div>
                <h1>Posts</h1>
                {
                    posts.map(posts =>
                        
                        <div key={posts.id}>
                            <h3>{posts.title}</h3>
                            <p>{posts.body}</p>  
                        </div>
                    )
                }
            </div>
       )
    

}

Posts.propTypes = {
    axiosPosts: propTypes.func.isRequired,
    posts: propTypes.array.isRequired
}


    


export default connect(null,{axiosGet})(Posts);