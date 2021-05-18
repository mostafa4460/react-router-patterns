import {Link} from 'react-router-dom';
import './ColorFactory.css';

const ColorFactory = ({colors}) => {
    return (
        <>
            <header className="ColorFactory-header">
                <h2>Welcome to the color factory.</h2>
                <Link to="/colors/new" className="ColorFactory-form-link">Add a color</Link>
            </header>
            <main>
                <p>Please select a color.</p>
                {colors.map(({name}) =>  (
                    <Link
                        className="ColorFactory-color-link"
                        key={name} 
                        to={`/colors/${name}`}>{name}</Link>
                ))}
            </main>
        </>
    );
};

export default ColorFactory;