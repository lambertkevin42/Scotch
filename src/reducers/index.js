import { NEXT_IMG, PREVIOUS_IMG } from "../actions";
import img1 from '../assets/images/leon.jpg';
import img2 from '../assets/images/octobrerouge.jpg';
import img3 from '../assets/images/smaug.jpg';
import img4 from '../assets/images/tontonsflingueurs.jpg';
import img5 from '../assets/images/brel.jpg';
import img6 from '../assets/images/claire.jpg';
import img7 from '../assets/images/hector.jpg';
import img8 from '../assets/images/saxophoniste.jpg';
import img9 from '../assets/images/sittingbull.jpg';

const initialState = {
    
    initialimg:0,
    imglist: [
        {
            id: 1,
            thumbnail: img1,
            name: 'Léon',
            alt: 'Léon',
            slug: 'leon',
        },
        {
            id: 2,
            thumbnail: img2,
            name: 'Octobre rouge',
            alt: 'Octobre rouge',
            slug: 'octobre-rouge',
        },
        {
            id: 3,
            thumbnail: img3,
            name: 'Smaug',
            alt: 'Smaug',
            slug: 'smaug',
        },
        {
            id: 4,
            thumbnail: img4,
            name: 'Les tontons flingueurs',
            alt: 'Les tontons flingueurs',
            slug: 'tontons-flingueurs',
        },
        {
            id: 5,
            thumbnail: img5,
            name: 'Jacques Brel',
            alt: 'Jacques Brel',
            slug: 'jacques-brel',
        },
        {
            id: 6,
            thumbnail: img6,
            name: 'Claire',
            alt: 'Claire',
            slug: 'claire',
        },
        {
            id: 7,
            thumbnail: img7,
            name: 'Hector Salamanca',
            alt: 'Hector Salamanca',
            slug: 'hector-salamanca',
        },
        {
            id: 8,
            thumbnail: img8,
            name: 'Saxophoniste',
            alt: 'Saxophoniste',
            slug: 'saxophoniste',
        },
        {
            id: 9,
            thumbnail: img9,
            name: 'Sitting Bull',
            alt: 'Sitting Bull',
            slug: 'sitting-bull',
        },
    ],
    
};

function reducer(state = initialState, action = {}) {
    
    switch (action.type) {
        case NEXT_IMG:
            return{
                ...state,             
                initialimg:state.initialimg +1,
            };
        case PREVIOUS_IMG:
            return{
                ...state,             
                initialimg:state.initialimg -1,
            };
        default:
            return state;
    }
}
export default reducer;