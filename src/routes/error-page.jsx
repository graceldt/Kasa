import { NavLink } from "react-router-dom";
import "../styles/error_page.css";

export default function ErrorPage() {
    //const error = useRouteError();
    //console.error(error);

    return (
        <div className="error-page">
            <h1 className="error-number">404</h1>
            <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/home/" className="error-redirection">Retourner sur la page d’accueil</NavLink>
        
        </div>
    );
}