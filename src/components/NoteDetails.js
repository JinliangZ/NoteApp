import React, {useContext}from 'react'
import { NoteContext } from '../contexts/NoteContext';

const NoteDetails = ({note}) => {
    const {removeNote} = useContext(NoteContext);
    return ( 
        <li>
            <div className="title">{note.title}</div>
            <div className="author">{note.author}</div>
            <button onClick={()=>{removeNote(note.id)}}>delete</button>
        </li>
     );
}
 
export default NoteDetails;