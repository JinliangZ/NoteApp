import React, {useContext, useState } from 'react'
import { NoteContext } from '../contexts/NoteContext';

const NewNoteForm = () => {
    const {dispatch} = useContext(NoteContext);
    const [title, setTitle] = useState('');
    const [day, setDay] = useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch({type:'ADD_NOTE', note:{
            title, day
        }});
        setTitle('');
        setDay('');
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <label htmlFor="note">Write Down Note in Here: </label>
            <input type="text" required placeholder="NOTE" value={title} onChange={(e)=>{
                setTitle(e.target.value)
            }} />
            <input type="text" required placeholder="DAY" value={day} onChange={(e)=>{
                setDay(e.target.value)
            }} />
            <input className="btn btn-outline-dark" type="submit" name="note" id="note" value ="ADD NOTE" />
        </form>
     );
}
 
export default NewNoteForm;