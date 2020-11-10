import NoteContextProvider from './contexts/NoteContext';
import Navbar from './components/Navbar';
import NoteList from './components/NoteList';
import NewNoteForm from './components/NoteForm';

function App() {
  return (
    <div className="App">
      <NoteContextProvider>
        <Navbar />
        <NoteList />
        <NewNoteForm />
      </NoteContextProvider>
    </div>
  );
}

export default App;
