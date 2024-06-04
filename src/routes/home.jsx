import { func } from 'prop-types';
import Banner from '../components/banner';
import Card from '../components/card';



function Home() {

    return <>
        <Banner />
        <section className='card-section'>  
            {Array.from({length:6}).map((_,index) =>
            (
                <Card key={index}/>
            ))}        
           
        </section>
    </>

    
}




export default Home;