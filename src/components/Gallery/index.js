import { useSelector } from 'react-redux';
import Image from '../Image';
import './gallery.scss';


function Gallery() {
    const images = useSelector((state) => state.imglist)
    return (
        <div className="gallery">
            {images.map((image) => (
                <Image 
                className="gallery-img"
                key = {image.id}
                {...image}    
            />
            ))}
        </div>
    );
}

export default Gallery;