import { useEffect, useState } from 'react'
import CreatePost from '../../components/CreatePost/CreatePost'
import { index, removePost } from '../../utilities/posts-api'
import Post from '../../components/Post/Post'

export default function GlobalPage({ postList }) {

    const [showForm, setShowForm] = useState(false)

    function toggleFormVisiblity() {
        setShowForm(!showForm)
    }

    const [postArr, setPostArr] = useState([])

    useEffect(() => {
        index()
            .then((res)=> res.json())
            .then((resData) => setPostArr(resData.posts))           
    }, [])

    function deletePost(id) {
        removePost(id) 
        .then(() => {
            return index()
        })
        .then((res)=> res.json())
        .then((resData) => setPostArr(resData.posts))  
    }

   

    const postMap = postArr.map((post, index) => (
        <Post post={post} key={index} deletePost={deletePost} />
    ))
    
    return (
        <div className='container-sm'>
            <h2 className='my-2'>Discover</h2>
            <button className ='btn btn-info my-2'onClick={toggleFormVisiblity}>Create New Bark</button>
           {showForm && <CreatePost toggleFormVisiblity={toggleFormVisiblity} />}
            {postMap}
        </div>
    )
}