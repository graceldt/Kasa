import Banner from '../components/banner';
import Card from '../components/card';
import logements from '../data/logement.json'
import banner from '../assets/Image_source_1.png'


function Home() {


    return (
        <div className='main-page'>
            <Banner  title="Chez vous, partout et ailleurs" banner={banner}/>
            <section className='accommodation'>
                <div className='accommodation-card'>
                    {logements.map((log) =>
                    (
                        <Card key={log.id} title={log.title} image={log.cover} id={log.id} />
                    ))}
                </div>
            </section>
        </div>
    )
}




export default Home;