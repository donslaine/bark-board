export default function CreatePost() {
    return(
        <>
            <form>
                <label>Title</label>
                <input type='text' />
                <label>Pet</label>
                <input type='text' />
                <label>Content</label>
                <input type='text' />
                <label>Category</label>
                <input type='text' />
                <button type='submit'>Create Post</button>
            </form>
        </>
    )
}