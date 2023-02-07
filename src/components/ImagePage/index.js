import { useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { findImage } from '../../selectors/image';
import './imagepage.scss';


function ImagePage(){

    const navigate = useNavigate();
    const {slug} = useParams();
    const imagepage = useSelector((state) => findImage(state.imglist, slug));
    if (imagepage === undefined) {
        return <Navigate to="/" replace />;
      }

    return(
        <div className="image">
            <button
        type="button"
        className="image-goback"
        onClick={() => {
          navigate(-1);
        }}
      >
        Retour à la gallerie
      </button>
            <h2 className="image-title">{imagepage.name}</h2>
            <img className="image-img" src={imagepage.thumbnail} alt={imagepage.alt} ></img>
            <p className="image-size" >{imagepage.size}</p>
            <p className="image-time" >{imagepage.time}</p>
            <p className="image-text" >{imagepage.description}</p>
        </div>
    );
}

export default ImagePage;