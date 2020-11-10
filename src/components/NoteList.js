import React, {useContext}from 'react'
import { NoteContext } from '../contexts/NoteContext';
import NoteDetails from './NoteDetails';

const NoteList = () => {
    const {notes}  =  useContext(NoteContext);
    return notes.length ? ( 
        <div className="note-list">
            <ul>
                {notes.map(note=>{
                    return (
                        <NoteDetails note={note} key={note.id}/ >
                    )
                })}
            </ul>
        </div>
     ):(
        <div className="empty">YOU ALL DONE EVERYTHING! GOOD JOB!</div>
     )
}
 
export default NoteList;