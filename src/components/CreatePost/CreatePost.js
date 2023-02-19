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
        setPost({
            ...post,
            [event.target.name]: event.target.value
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const formData = { ...post }
            await create(formData)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <form>

                <div class='form-floating'>
                <input class='form-control' type='text' name='title' placeholder='Add Title' value={post.title} onChange={handleChange} />
                <label class='form-label'>Title</label>
                </div>
                <div class='form-floating'>
                <input class='form-control' type='text' name='pet' placeholder='Add Pet' value={post.pet} onChange={handleChange} />
                <label class='form-label'>Pet</label>
                </div>
                <div class='form-floating'>
                <textarea class='form-control' placeholder='Add Text' name='text' value={post.content} onChange={handleChange} />
                <label class='form-label'>Text</label>
                </div>
                <div class='form-floating'>
                <input class='form-control' type='text' name='category' placeholder='Add Category' value={post.category} onChange={handleChange} />
                <label class='form-label'>Category</label>
                </div>
                <button class ='btn btn-primary mt-3 mb-3' type='submit' onClick={handleSubmit}>Create Post</button>

               
            </form>
        </>
    )
}