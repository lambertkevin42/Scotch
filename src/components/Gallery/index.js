import { useSelector } from 'react-redux';
import Image from '../Image';
import './gallery.scss';
import img1 from '../../assets/images/leon.jpg';
import img2 from '../../assets/images/octobrerouge.jpg';
import img3 from '../../assets/images/smaug.jpg';
import img4 from '../../assets/images/tontonsflingueurs.jpg';

function Gallery() {
    const images = useSelector((state) => state.imglist)
    return (
        <div className="gallery">
            {images.map((image) => (
                <Image
                key = {image.id}
                {...image}    
            />
            ))}
            <img className="gallery-img1" alt="Léon" src={img1}></img>
            <img className="gallery-img2" alt="Octobre rouge" src={img2}></img>
            <img className="gallery-img3" alt="Smaug" src={img3}></img>
            <img className="gallery-img4" alt="Les tontons flingueurs" src={img4}></img>
        </div>
    );
}

export default Gallery;