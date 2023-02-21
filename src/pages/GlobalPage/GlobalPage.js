import { useEffect, useState } from 'react'
import CreatePost from '../../components/CreatePost/CreatePost'
import { index, removePost } from '../../utilities/posts-api'
import Post from '../../components/Post/Post'
import './GlobalPage.css'

export default function GlobalPage({ user }) {

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

    // this function handles the post delete button
    function deletePost(id) {
        removePost(id) 
            .then(() => {
                return index()
            })
            .then((res)=> res.json())
            .then((resData) => setPostArr(resData.posts))  
    }

    // this maps each post component out with the post data from state
    const postMap = postArr.map((post, index) => (
        <Post post={post} key={index} deletePost={deletePost} setPostArr= {setPostArr} user={user}/>
    ))
    
    return (
        <div className='container-sm'>
            <h1 className='my-2'>Discover</h1>
            <button 
                className ='btn btn-info my-2'
                onClick={toggleFormVisiblity}
                >Create New Bark <i class="fa-solid fa-paw"></i></button>
            {showForm && 
                <CreatePost 
                    toggleFormVisiblity={toggleFormVisiblity} 
                    setPostArr={setPostArr}
                />
            }
            {postMap}
        </div>
    )
}