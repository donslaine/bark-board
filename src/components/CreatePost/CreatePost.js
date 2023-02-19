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
                <div></div>
                <label className="form-label text-justify">Title</label>
                <input className="form-control" type='text' name='title' value={post.title} onChange={handleChange} />
                <label className="form-label">Pet</label>
                <input className="form-control" type='text' name='pet' value={post.pet} onChange={handleChange} />
                <label className="form-label">Text</label>
                <textarea className="form-control" rows='6'name='text' value={post.content} onChange={handleChange} />
                <label className="form-label">Category</label>
                <input className="form-control" type='text' name='category' value={post.category} onChange={handleChange} />
                <button className ='btn btn-success mt-3 mb-3' type='submit' onClick={handleSubmit}>Create Post</button>
            </form>
        </>
    )
}