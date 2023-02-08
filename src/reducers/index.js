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
            description:`Inspirée de l'affiche originale du film éponyme, sorti en France le 14 septembre 1994 et réalisé par Luc Besson.
            J'ai choisi comme sujet de cette oeuvre Léon, interprété par Jean Reno.
            Cette oeuvre est faite de 9 couches de scotch marron, habituellement dédié à l'emballage de carton.
            Elle est entièrement réalisée en scotch, sur un support plastique transparent.
            J'ai effectué ce travail par suppression de matière, de sorte à laisser passer la lumière pour révéler des zones plus ou moins claires et ainsi créer les contrastes.`,
            size:'52cm x 42cm',
            time:'56 heures',
        },
        {
            id: 2,
            thumbnail: img2,
            name: `A la poursuite d'Octobre rouge`,
            alt: 'Octobre rouge',
            slug: 'octobre-rouge',
            description:`Inspirée d'une scène du film éponyme, sorti aux Etats-Unis le 2 mars 1990 et réalisé par John McTiernan.
            J'ai choisi comme sujet de cette oeuvre le capitaine Marko Ramius, interprété par Sean Connery.
            Cette oeuvre est faite de 8 couches de scotch marron, habituellement dédié à l'emballage de carton.
            Elle est entièrement réalisée en scotch, sur un support plastique transparent.
            J'ai effectué ce travail par suppression de matière, de sorte à laisser passer la lumière pour révéler des zones plus ou moins claires et ainsi créer les contrastes.`,
            size:'75cm x 50cm',
            time:'48 heures',
        },
        {
            id: 3,
            thumbnail: img3,
            name: 'Le hobbit: La désolation de Smaug',
            alt: 'Smaug',
            slug: 'smaug',
            description:`Inspirée d'une scène du film éponyme, sorti en Norvège le 11 décembre 2013 et réalisé par Peter Jackson.
            J'ai choisi comme sujet de cette oeuvre la scène entre Smaug et Bilbon Sacquet, interprété par Martin Freeman.
            Cette oeuvre est faite de 14 couches de scotch marron, habituellement dédié à l'emballage de carton.
            Elle est entièrement réalisée en scotch, sur un support plastique transparent.
            J'ai effectué ce travail par suppression de matière, de sorte à laisser passer la lumière pour révéler des zones plus ou moins claires et ainsi créer les contrastes.`,
            size:'50cm x 75cm',
            time:'108 heures',
        },
        {
            id: 4,
            thumbnail: img4,
            name: 'Les tontons flingueurs',
            alt: 'Les tontons flingueurs',
            slug: 'tontons-flingueurs',
            description:`Inspirée du film éponyme sorti en France le 27 novembre 1963, réalisé par Georges Lautner.
            J'ai choisi comme sujet de cette oeuvre les acteurs emblématiques du film Lino Ventura, Bernard Blier, Jean Lefebvre, Francis Blanche et Robert Dalban.
            Cette oeuvre est faite de 10 couches de scotch marron, habituellement dédié à l'emballage de carton.
            Elle est entièrement réalisée en scotch, sur un support plastique transparent.
            J'ai effectué ce travail par suppression de matière, de sorte à laisser passer la lumière pour révéler des zones plus ou moins claires et ainsi créer les contrastes.`,
            size:'50cm x 120cm',
            time:'256 heures',
        },
        {
            id: 5,
            thumbnail: img5,
            name: 'Jacques Brel',
            alt: 'Jacques Brel',
            slug: 'jacques-brel',
            description:`Inspirée du célèbre chanteur belge Jacques Brel.
            J'ai choisi comme sujet de cette oeuvre le chanteur lui-même.
            Cette oeuvre est faite de 6 couches de scotch marron, habituellement dédié à l'emballage de carton.
            Elle est entièrement réalisée en scotch, sur un support plastique transparent.
            J'ai effectué ce travail par suppression de matière, de sorte à laisser passer la lumière pour révéler des zones plus ou moins claires et ainsi créer les contrastes.`,
            size:'50cm x 70cm',
            time:'15 heures',
        },
        {
            id: 6,
            thumbnail: img6,
            name: 'Claire',
            alt: 'Claire',
            slug: 'claire',
            description:`Inspirée d'une rencontre personnelle.
            J'ai choisi comme sujet de cette oeuvre cette demoiselle, ni plus ni moins.
            Cette oeuvre est faite de 10 couches de scotch marron, habituellement dédié à l'emballage de carton.
            Elle est entièrement réalisée en scotch, sur un support plastique transparent.
            J'ai effectué ce travail par suppression de matière, de sorte à laisser passer la lumière pour révéler des zones plus ou moins claires et ainsi créer les contrastes.`,
            size:'70cm x 50cm',
            time:'45 heures',
        },
        {
            id: 7,
            thumbnail: img7,
            name: 'Hector Salamanca',
            alt: 'Hector Salamanca',
            slug: 'hector-salamanca',
            description:`Inspirée de la série Breaking Bad, sortie aux Etats-Unis le 20 janvier 2008.
            J'ai choisi comme sujet de cette oeuvre Hector Salamanca interprété par Mark Margolis.
            Cette oeuvre est faite de 11 couches de scotch marron, habituellement dédié à l'emballage de carton.
            Elle est entièrement réalisée en scotch, sur un support plastique transparent.
            J'ai effectué ce travail par suppression de matière, de sorte à laisser passer la lumière pour révéler des zones plus ou moins claires et ainsi créer les contrastes.`,
            size:'70cm x 50cm',
            time:'55 heures',
        },
        {
            id: 8,
            thumbnail: img8,
            name: 'Coleman Hawkins',
            alt: 'Saxophoniste',
            slug: 'saxophoniste',
            description:`Inspirée du saxophoniste Coleman Hawkins, une référence dans son domaine depuis les années 1920. Il est le premier saxophoniste soliste à faire ses preuves sur scène.
            J'ai choisi comme sujet de cette oeuvre ce saxophoniste emblématique.
            Cette oeuvre est faite de 8 couches de scotch marron, habituellement dédié à l'emballage de carton.
            Elle est entièrement réalisée en scotch, sur un support plastique transparent.
            J'ai effectué ce travail par suppression de matière, de sorte à laisser passer la lumière pour révéler des zones plus ou moins claires et ainsi créer les contrastes.`,
            size:'52cm x 37cm',
            time:'12 heures',
        },
        {
            id: 9,
            thumbnail: img9,
            name: 'Sitting Bull',
            alt: 'Sitting Bull',
            slug: 'sitting-bull',
            description:`Réalisée sur demande de mon tout premier acheteur et ami Hugo, qui m'encourage à créer d'avantage.
            Je suis fier de vous présenter mon interprétation de Sitting Bull qui à dirigé son peuple pendant des années de résistance contre les politiques du gouvernement des Etats-Unis au XIXème siècle.
            Cette oeuvre est faite de 12 couches de scotch marron, habituellement dédié à l'emballage de carton.
            Elle est entièrement réalisée en scotch, sur un support plastique transparent.
            J'ai effectué ce travail par suppression de matière, de sorte à laisser passer la lumière pour révéler des zones plus ou moins claires et ainsi créer les contrastes.`,
            size:'70cm x 50cm',
            time:'27 heures',
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