import {useParams, Link, useHistory} from 'react-router-dom';
import './Color.css';

const Color = ({colors}) => {
    const {name} = useParams();
    const history = useHistory();
    const color = colors.find(c => c.name === name);
    if (!color) {
        history.push('/colors');
        return null;
    }

    return (
        <div style={{backgroundColor: color.value}} className="Color">
            <p>THIS IS {name.toUpperCase()}.</p>
            <p>ISN'T IT BEAUTIFUL?</p>
            <Link to="/colors">GO BACK</Link>
        </div>
    );
};

export default Color;