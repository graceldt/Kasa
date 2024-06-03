import { func } from 'prop-types';
import Banner from '../components/banner';
import Card from '../components/card';

function Home() {

    return <>
        <Banner />
        <section className='card-section'>
            <Card />
        </section>
    </>

    
}




export default Home;