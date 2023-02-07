import './footer.scss';
import icon from '../../assets/images/insta.png';

function Footer() {
    return (
        <div className="footer">
            <img className="footer-logo" src={icon} alt="Logo instagram" />
            <a href="https://www.instagram.com/kevinlambert_scotch/?hl=fr" className="footer-text">kevinlambert_scotch</a>
        </div>
    );
}

export default Footer;