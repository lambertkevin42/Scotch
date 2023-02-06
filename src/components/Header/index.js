import { Link } from 'react-router-dom';
import './header.scss';


function Header() {
    return (
        <div className="header">
            <div>
                <Link 
                    to="/"
                    className="header-logo"
                >
                    SA
                </Link>
            </div>
            <h1 className="header-title">Scotch Art</h1>
            <p className="header-subtitle">by Kévin Lambert</p>
        </div>
    );
}

export default Header;