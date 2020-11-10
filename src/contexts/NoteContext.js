import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export const NoteContext = createContext();

const NoteContextProvider = (props) => {
    const [notes, setNotes] = useState([
        { title: 'almost home', author: 'zjlsssas', id: 1 },
        { title: 'memory gospel', author: 'zjlsssss',id: 2 },
        { title: 'this wild darkness',author: 'zjlsssss', id: 3 }
    ]);
    const addNote =(title, author)=>{
        setNotes([...notes, {title, author,id: uuidv4()}])
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