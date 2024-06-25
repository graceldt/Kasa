import logo from '../assets/LOGO.png'
import { NavLink, useLocation } from 'react-router-dom';

function HeaderApp() {

    const location = useLocation ()
    console.log(location.pathname)

    return <header className='header-container'>
            <img src={logo} className="nav-logo" alt="logo" />
            <nav className='nav-bar'>
                <ul className='menu' >
                    <li className='nav-list'>
                        <NavLink to="/home" className={location.pathname === "/home" ? 'active-nav' : ''}> Accueil</NavLink >
                    </li>
                    <li className='nav-list'>
                        <NavLink to="/about" className={location.pathname === "/about" ? 'active-nav' : ''}>A propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        ;
}

export default HeaderApp;
