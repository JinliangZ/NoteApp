import React, {useContext, useState } from 'react'
import { NoteContext } from '../contexts/NoteContext';

const NewNoteForm = () => {
    const {addNote} = useContext(NoteContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        addNote(title,author);
        setTitle('');
        setAuthor('');
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <label htmlFor="note">Put Note in Here: </label>
            <input type="text" required placeholder="note" value={title} onChange={(e)=>{
                setTitle(e.target.value)
            }} />
            <input type="text" required placeholder="author" value={author} onChange={(e)=>{
                setAuthor(e.target.value)
            }} />
            <input type="submit" name="note" id="note" value ="add note" />
        </form>
     );
}
 
export default NewNoteForm;