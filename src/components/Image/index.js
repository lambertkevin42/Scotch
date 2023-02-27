
import { Link } from 'react-router-dom';
import './image.scss';

function Image({
    name,
    alt,
    thumbnail,
    id,
    slug,
    width,
    height,
}) {

    return (
        <div className="image">
        <h2 className="image-title">-  {name}  -</h2>
        <img className="image-img" alt={alt} src={thumbnail} width={width} height={height}></img>
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