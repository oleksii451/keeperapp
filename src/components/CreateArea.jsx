import React , {useEffect , useState} from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: "",
        id: ""
    });
    useEffect(()=> {
        console.log('EFFECT')
    }, [note]);
    const [small, setFull] = useState(true);

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value,

            };
        });
    }

    function submitNote(event) {

        props.onAdd(note);
        event.preventDefault();
            setNote({
                title: "",
                content: "",
                id: ""
            });
    }

    function toggleFull() {
        setFull(prevState => !prevState);
    }

    if (small) {
        return (
            <div>
                <form className="create-note">
                    <textarea
                        name="content"
                        onClick={toggleFull}

                        placeholder="Take a note..."
                        rows="1"
                    />
                    <Zoom in={true}>
                        <Fab onClick={submitNote}><AddCircleIcon /></Fab>
                    </Zoom>
                </form>
            </div>
        );
    } else {
        return (
            <div>
                <form className="create-note">
                    <input
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder="Title"
                    />
                    <textarea
                        name="content"
                        onChange={handleChange}
                        value={note.content}
                        placeholder="Take a note..."
                        rows="3"
                    />
                    <Zoom in={true}>
                        <Fab onClick={submitNote}><AddCircleIcon /></Fab>
                    </Zoom>
                </form>
            </div>
        );
    }


}

export default CreateArea;
