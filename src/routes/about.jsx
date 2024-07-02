import Banner from '../components/banner';
import banner from '../assets/Image_source_2.png';
import Collapse from '../components/collapse';


function About() {

    return <div className='main-page'>
    <Banner  banner={banner}/>
    <section className='collapse-section'>
    <Collapse label="Fiabilité">
    <p className='collapse-content'>
        Les annonces postées sur Kasa garantissent une fiabilité totale. 
        Les photos sont conformes aux logements, et toutes les informations 
        sont régulièrement vérifiées  par nos équipes.
    </p>
    </Collapse>
    <Collapse label="Respect">
    <p className='collapse-content'>
        La bienveillance fait partie des valeurs fondatrices de Kasa.
        Tout comportement discriminatoire ou de perturbation du voisinage
        entraînera une exclusion de notre plateforme.
    </p>
    </Collapse>
    <Collapse label="Service">
    <p className='collapse-content'>
        La bienveillance fait partie des valeurs fondatrices de Kasa.
        Tout comportement discriminatoire ou de perturbation du voisinage
        entraînera une exclusion de notre plateforme.
    </p>
    </Collapse>
    <Collapse label="Sécurité">
    <p className='collapse-content'>
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
        que pour les voyageurs, chaque logement correspond aux critères
        de sécurité établis par nos services. En laissant une note aussi bien
        à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les 
        standards sont bien respectés. Nous organisons également des ateliers sur
        la sécurité domestique pour nos hôtes.
    </p>
    </Collapse>
    </section>
</div>

}




export default About;