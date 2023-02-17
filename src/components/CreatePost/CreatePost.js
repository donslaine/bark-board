import { useState } from 'react'
import { create } from '../../utilities/posts-api'

export default function CreatePost() {
    const [post, setPost] = useState({
        title: '',
        pet: '',
        text: '',
        category: ''
    })

    function handleChange(event) {
        setPost({...post, 
        [event.target.name]: event.target.value
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const formData = {...post}
            // console.log(formData)
            await create(formData)
        } catch (error){
            console.error(error)
        }
    }

    return(
        <>
            <form>
                <label>Title</label>
                <input type='text' name='title' value={post.title} onChange={handleChange}/>
                <label>Pet</label>
                <input type='text' name='pet' value={post.pet} onChange={handleChange}/>
                <label>Text</label>
                <input type='text' name='text' value={post.content} onChange={handleChange}/>
                <label>Category</label>
                <input type='text' name='category' value={post.category} onChange={handleChange}/>
                <button type='submit' onClick={handleSubmit}>Create Post</button>
            </form>
        </>
    )
}