import { NavLink } from "react-router-dom";
import "../styles/card.css";


function Card ({title, image, id}){

    return <>
            <NavLink to={'/accommodation/'+ id} className='card-section'>
                <article className='card'>
                    <img src={image} alt={title} />
                    <p className='card-text'>{title}</p>
                </article>
            </NavLink>
    </>
}

export default Card;