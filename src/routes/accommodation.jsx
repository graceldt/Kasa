import { useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import logements from '../data/logement.json'
import Slideshow from '../components/slideshow ';
import Collapse from '../components/collapse';
import "../styles/accomodation.css";
import Rating from '../components/rate';




function Accommodation() {
    const { id } = useParams()
    const Navigate = useNavigate()
    const [log, setLogement] = useState(null)

    useEffect(() => {
        const foundLogement = logements.find((logement) => logement.id === id)

        setLogement(foundLogement)

        if (!foundLogement) {
            Navigate("/logement-non-trouvé")
        }
    }, [id, Navigate])




    return (
        log !== null && (
            <div className='main-page'>
                <Slideshow slides={log.pictures} />
                <div className='title-host'>
                    <div className='title'>
                        <span className='title-name'>{log.title}</span>
                        <p className='location'>{log.location}</p>
                        <div className='tag-section'>
                                {
                                    log.tags.map((tag, index) => <span className='tag' key={index}>{tag}</span>)
                                }
                        </div>
                    </div>
                    <div className='host'>
                        <div className='host-info'>
                        <span className='host-name'> {log.host.name}</span> 
                            <img src={log.host.picture} alt={log.host.name} />
                        </div>
                        <Rating rating_number={log.rating} />
                    </div>
                </div>

                <div className='description_more'>
                    <Collapse label="Description">
                        <p className='collapse-content'>{log.description} </p>
                    </Collapse>
                    <Collapse label="Équipements">
                        {
                            log.equipments.map((equipment, i) => (
                                <p key={i}> {equipment}</p>
                            ))
                        }
                        
                    </Collapse>
                </div>
            </div>
        )
    )

}


export default Accommodation;