import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import {v4 as uuidv4 } from 'uuid';

function App() {

    const [notes, setNotes] = useState([]);

    function addNote( {title, content, id}) {

        setNotes(prevNotes => {
            return [...prevNotes, {title, content, id: uuidv4()}];
        });
    }

    function deleteNote(uid) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem) => {
                return noteItem.id !== uid;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map(( {title, content, id} ) => {
                return (
                    <Note
                        key={id}
                        id={id}
                        title={title}
                        content={content}
                        onDelete={deleteNote}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;
