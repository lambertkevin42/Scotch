import './footer.scss';
import icon from '../../assets/images/insta.png';

function Footer() {
    return (
        <div className="footer">
            <img className="footer-logo" src={icon} alt="Logo instagram" />
            <p className="footer-text">kevinlambert_scotch</p>
        </div>
    );
}

export default Footer;