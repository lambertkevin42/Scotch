import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './image.scss';

function Image({
    name,
    alt,
    thumbnail,
    id,
    slug,
}) {

    return (
        <div className="image">
        <h2 className="image-title">{name}</h2>
        <img className="image-img" alt={alt} src={thumbnail}></img>
        <Link 
            key={id}
            to= {`/image/${slug}`}
            className="image-link"
        >
            Plus d'informations
        </Link> 
        </div>
    );
}

export default Image;