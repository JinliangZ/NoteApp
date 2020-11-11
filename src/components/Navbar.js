import React, {useContext} from 'react';
import { NoteContext } from '../contexts/NoteContext';

const Navbar = () => {
    const {notes} = useContext(NoteContext);
    return ( 
        <div className="navbar">
            <h1 className="display-4">Notes</h1>          
            <p className="lead mx-auto">YOU HAVE {notes.length} THINGS TO DO</p>    
        </div>
     );
}
 
export default Navbar;