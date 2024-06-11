import { useParams, useNavigate } from 'react-router';
import logements from '../data/logement.json'
import Slider from '../components/slider';
import Collapse from '../components/collapse';
import "../styles/accomodation.css";
import Rating from '../components/rate';
import { useState, useEffect } from 'react';



function Accommodation() {
    const {id}= useParams ()
    const Navigate = useNavigate()
    const [log, setLogement]= useState(null)

    useEffect(()=>{
        const foundLogement = logements.find((logement) => logement.id === id)

        setLogement(foundLogement)

        if (!foundLogement){
            Navigate("/logement-non-trouvé")
        }
    }, [id])




    return <div className='main-page'>
        {
            log !== null &&
            <article>
            <Slider slides={log.pictures}/>
            <div className='title-host'>
            <span className='title-name'>{log.title}</span>
            <div className='host-info'>
                {log.host.name}
                <img src={log.host.picture} alt={log.host.name}/>
            </div>
            </div>
            <p>{log.location}</p>
            <div className='rating_tag'>
                <div>
                {
                    log.tags.map((tag, index) => <span className='tag' key={index}>{tag}</span>)
                }
                </div>
                
                <Rating rating_number={log.rating}/>
            </div>
            <div className='description_more'>
                <Collapse label="Description">
                    <p>{log.description} </p>
                </Collapse>
                <br />
                <Collapse label="Équipements">
                    <p>{log.equipments}</p>
                </Collapse>
            </div>
            </article>
        }
    </div>

}


export default Accommodation;