import '../styles/home_page.css'
import logo from '../assets/logo-footer.png'

function FooterApp() {
    return <footer className='footer-container ' >
            <img src={logo} className="footer-logo" alt="logo" />
            <p>
            © 2020 Kasa. All rights reserved
            </p>
        </footer>
    
        ;
}

export default FooterApp;