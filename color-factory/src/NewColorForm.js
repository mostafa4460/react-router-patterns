import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './NewColorForm.css';

const NewColorForm = ({addColor}) => {
    const INITIAL_STATE = {name: "", value: "#000000"};
    const [colorForm, setColorForm] = useState(INITIAL_STATE);
    const history = useHistory();

    const handleChange = e => {
        const {name, value} = e.target;
        setColorForm(oldForm => ({...oldForm, [name]: value}));
    };
    const handleSubmit = e => {
        e.preventDefault();
        addColor(colorForm);
        history.push('/colors');
    }

    return (
        <div className="NewColorForm">
            <form className="NewColorForm-form" onSubmit={handleSubmit}>
                <div className="NewColorForm-field">
                    <label htmlFor="name">Color Name: </label>
                    <input 
                        id="name"
                        type="text"
                        placeholder="Name of color"
                        name="name"
                        value={colorForm.name}
                        onChange={handleChange} />
                </div>

                <div className="NewColorForm-field">
                    <label htmlFor="value">Color Value: </label>
                    <input 
                        id="value"
                        type="color"
                        name="value"
                        value={colorForm.value}
                        onChange={handleChange} />
                </div>

                <button>Add Color</button>
            </form>
        </div>
    );
}

export default NewColorForm;