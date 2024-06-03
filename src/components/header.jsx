import '../styles/home_page.css'
import logo from '../assets/LOGO.png'

function HeaderApp() {
    return <header className='header-container ' >
            <img src={logo} className="nav-logo" alt="logo" />
            <nav className='nav-bar'>
                <ul className='menu' >
                    <li className='nav-list'>
                        <a href='/home'>Accueil</a>
                    </li>
                    <li className='nav-list'>
                        <a href='/about'>A propos</a>
                    </li>
                </ul>
            </nav>
        </header>
        ;
}

export default HeaderApp;
