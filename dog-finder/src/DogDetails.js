import {useParams} from 'react-router-dom';
import Dog from './Dog';
import './DogDetails.css';

const DogDetails = ({dogs}) => {
    const {name} = useParams();
    const dog = dogs.filter(dog => dog.name === name);

    return (
        <div className="DogDetails">
            <Dog {...dog[0]} />
        </div>
    );
}

export default DogDetails;