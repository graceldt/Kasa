import logo from '../assets/LOGO.png'

function HeaderApp() {
    return <header className='header-container ' >
            <img src={logo} className="nav-logo" alt="logo" />
            <nav className='nav-bar'>
                <ul className='menu' >
                    <li className='nav-list'>
                        <a href='/home' className={
                            window.location.pathname === '/home' || window.location.pathname === '/' ? 'active-nav' : 'none'}
                        >Accueil</a>
                    </li>
                    <li className='nav-list'>
                        <a href='/about' className={window.location.pathname === '/about' ? 'active-nav' : 'none'}>A propos</a>
                    </li>
                </ul>
            </nav>
        </header>
        ;
}

export default HeaderApp;
