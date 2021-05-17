import {NavLink} from 'react-router-dom';
import './Nav.css';

const Nav = ({names}) => (
    <nav className="Nav">
        {names.map(name => (
            <NavLink
                exact 
                key={name} 
                to={`/dogs/${name}`}>{name}</NavLink>
        ))}
    </nav>
);

export default Nav;