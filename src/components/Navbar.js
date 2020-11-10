import React, {useContext} from 'react';
import { NoteContext } from '../contexts/NoteContext';

const Navbar = () => {
    const {notes} = useContext(NoteContext);
    return ( 
        <div className="navbar">
            <h1>Notes</h1>
            <p>CURRENTLY YOU HAVE {notes.length} THINGS TO DO</p>
        </div>
     );
}
 
export default Navbar;