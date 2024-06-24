import "../styles/card.css";


function Card ({title, image, id}){

    return <>
            <a href={"/accommodation/"+ id} className='card-section'>
                <article className='card'>
                    <img src={image} alt={title} />
                    <p className='card-text'>{title}</p>
                </article>
            </a>
    </>
}

export default Card;