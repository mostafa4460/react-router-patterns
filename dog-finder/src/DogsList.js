import Dog from './Dog';
import './DogsList.css';

const DogsList = ({dogs}) => (
    <div className="DogsList">
        {dogs.map(dog => <Dog key={dog.name} {...dog} />)}
    </div>
);

export default DogsList;