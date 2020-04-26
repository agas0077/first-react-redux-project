import React from 'react'
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/actions'
import { Loader } from './Loader'

export default () => {
    const posts = useSelector((state) => {
        return state.posts.fechedPosts
    })

    const loading = useSelector((state) => {
        return state.app.loading
    })

    if (loading === true) return (<Loader />)

    const dispatch = useDispatch()
    
    if (!posts.length) {
        return  (<button 
                    className='btn btn-primary' 
                    onClick={() => dispatch(fetchPosts())} 
                >
                    Загрузить
                </button>)
    }
    return posts.map(post => <Post post={post} key={post.id} /> )
}

