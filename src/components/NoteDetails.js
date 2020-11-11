import React, {useContext}from 'react'
import { NoteContext } from '../contexts/NoteContext';

const NoteDetails = ({note}) => {
    const {dispatch} = useContext(NoteContext);
    return ( 
        <li>
            <div className="title">{note.title}</div>
            <div className="day">{note.day}</div>
            <button className="btn btn-danger" onClick={
                ()=>{dispatch({type:'REMOVE_NOTE',id:note.id})}}>delete</button>
        </li>
     );
}
 
export default NoteDetails;