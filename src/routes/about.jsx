import Banner from '../components/banner';
import banner from '../assets/Image_source_2.png';
import Collapse from '../components/collapse';
import "../styles/collapse.css";

function About() {

    return <div className='main-page'>
    <Banner  label="" banner={banner}/>
    <section className='collapse-section'>
    <Collapse label="Fiabilité" paragraphe>
    <p>
        Les annonces postées sur Kasa garantissent une fiabilité totale. 
        Les photos sont conformes aux logements, et <br/> toutes les informations 
        sont régulièrement vérifiées  par nos équipes.
    </p>
    </Collapse>
    <br />
    <Collapse label="Respect">
    <p>
        La bienveillance fait partie des valeurs fondatrices de Kasa.
        Tout comportement discriminatoire ou de<br/> perturbation du voisinage
        entraînera une exclusion de notre plateforme.
    </p>
    </Collapse>
    <br />
    <Collapse label="Service">
    <p>
        La bienveillance fait partie des valeurs fondatrices de Kasa.
        Tout comportement discriminatoire ou de<br/>perturbation du voisinage
        entraînera une exclusion de notre plateforme.
    </p>
    </Collapse>
    <br />
    <Collapse label="Sécurité">
    <p>
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
        que pour les voyageurs, chaque logement <br/>correspond aux critères
        de sécurité établis par nos services. En laissant une note aussi bien
        à l'hôte qu'au <br/>locataire, cela permet à nos équipes de vérifier que les 
        standards sont bien respectés. Nous organisons<br/> également des ateliers sur
        la sécurité domestique pour nos hôtes.
    </p>
    </Collapse>
    </section>
</div>

}




export default About;