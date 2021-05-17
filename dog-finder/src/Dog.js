import './Dog.css';

const Dog = ({name, age, src, facts}) => (
    <div className="Dog">
        <h2>{name} - {age} yrs old</h2>
        <ul className="Dog-facts">
            {facts.map((fact, i) => <li key={i}>{fact}</li>)}
        </ul>
        <img className="Dog-img" src={src} alt={name} />  
    </div>
);

export default Dog;