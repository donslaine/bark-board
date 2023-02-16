import { useState } from 'react'
import { create } from '../../utilities/posts-api'

export default function CreatePost() {
    const [post, setPost] = useState({
        title: '',
        pet: '',
        content: '',
        category: ''
    })

    function handleChange(event) {
        setPost({...post, 
        [event.target.name]: event.target.value
        })
        console.log(post)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const newPost = await create(post)
            setPost(newPost)
        } catch (error){
            console.error(error)
        }
    }

    return(
        <>
            <form onClick={handleSubmit}>
                <label>Title</label>
                <input type='text' name='title' onChange={handleChange}/>
                <label>Pet</label>
                <input type='text' name='pet' onChange={handleChange}/>
                <label>Content</label>
                <input type='text' name='content' onChange={handleChange}/>
                <label>Category</label>
                <input type='text' name='category' onChange={handleChange}/>
                <button type='submit'>Create Post</button>
            </form>
        </>
    )
}