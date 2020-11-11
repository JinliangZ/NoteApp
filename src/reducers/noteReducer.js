import { v4 as uuidv4 } from 'uuid';


export const noteReducer = (state, action) => {
    switch(action.type){
        case 'ADD_NOTE':
            return [...state,{
                title: action.note.title,
                day: action.note.day,
                id:  uuidv4()
            }]
        case 'REMOVE_NOTE':
            return state.filter(note => note.id !== action.id)
        default:
            return state
    }
}