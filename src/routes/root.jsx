import HeaderApp from '../components/header'
import FooterApp from '../components/footer'
import { Outlet } from "react-router-dom";
import '../styles/main.css'

export default function Root() {
    return (
        <>
            <HeaderApp />
            <div className="main_page">
                <Outlet />
            </div>
            <FooterApp />
        </>
    );
}