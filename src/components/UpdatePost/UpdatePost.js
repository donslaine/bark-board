import { useState } from 'react'
import { update } from '../../utilities/posts-api'

export default function UpdatePost({ post }) {
    const [updatePost, setUpdatePost] = useState({
        title: '',
        pet: '',
        text: '',
        category: ''
    }) 

    function handleChange(event) {
        setUpdatePost({...updatePost, 
        [event.target.name]: event.target.value
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const formData = {...updatePost}
            await update(formData)
        } catch (error){
            console.error(error)
        }
    }

    return (
        <div>
            <form>
                <label>Title</label>
                <input type='text' name='title' value={post.title} onChange={handleChange} />
                <label>Pet</label>
                <input type='text' name='pet' value={post.pet} onChange={handleChange} />
                <label>Text</label>
                <input type='text' name='text' value={post.content} onChange={handleChange} />
                <label>Category</label>
                <input type='text' name='category' value={post.category} onChange={handleChange} />
                <button type='submit' onClick={handleSubmit}>Update Post</button>
            </form>
        </div>
    )
}