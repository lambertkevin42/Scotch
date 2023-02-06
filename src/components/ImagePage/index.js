import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { findImage } from '../../selectors/image';
import './imagepage.scss';


function ImagePage(){

    const {slug} = useParams();
    const imagepage = useSelector((state) => findImage(state.imglist, slug));
    if (imagepage === undefined) {
        return <Navigate to="/" replace />;
      }

    return(
        <div className="image">
            <h2 className="image-title">{imagepage.name}</h2>
            <img className="image-img" src={imagepage.thumbnail} alt={imagepage.alt} ></img>
        </div>
    );
}

export default ImagePage;