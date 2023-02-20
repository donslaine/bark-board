import { useState } from 'react'
import { create, index } from '../../utilities/posts-api'

export default function CreatePost({ toggleFormVisiblity, setPostArr }) {
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
                .then(() => {
                    return index()
                })
                .then((res)=> res.json())
                .then((resData) => setPostArr(resData.posts))
            toggleFormVisiblity()
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <form>

                <div className='form-floating'>
                <input className='form-control' type='text' name='title' placeholder='Add Title' value={post.title} onChange={handleChange} />
                <label className='form-label'>Title</label>
                </div>
                <div className='form-floating'>
                <input className='form-control' type='text' name='pet' placeholder='Add Pet' value={post.pet} onChange={handleChange} />
                <label className='form-label'>Pet</label>
                </div>
                <div className='form-floating'>
                <textarea className='form-control' placeholder='Add Text' name='text' value={post.content} onChange={handleChange} />
                <label className='form-label'>Text</label>
                </div>
                <div className='form-floating'>
                <input className='form-control' type='text' name='category' placeholder='Add Category' value={post.category} onChange={handleChange} />
                <label className='form-label'>Category</label>
                </div>
                <button className ='btn btn-primary mt-3 mb-3' type='submit' onClick={handleSubmit}>Create Post</button>

               
            </form>
        </>
    )
}