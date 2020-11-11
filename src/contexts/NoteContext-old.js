import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export const NoteContext = createContext();

const NoteContextProvider = (props) => {
    const [notes, setNotes] = useState([
        { title: 'wash jacket', day: 'Monday', id: 1 },
        { title: 'buy some milk', day: '11-10-2020',id: 2 },
        { title: 'play game with Mario',day: 'Sunday', id: 3 }
    ]);
    const addNote =(title, day)=>{
        setNotes([...notes, {title, day,id: uuidv4()}])
    };
    const removeNote = (id)=>{
        setNotes(notes.filter(note=>{
            return note.id !== id
        }))
    };
    return ( 
        <NoteContext.Provider value ={{notes,addNote,removeNote}}>
            {props.children}
        </NoteContext.Provider>
     );
}
 
export default NoteContextProvider; 