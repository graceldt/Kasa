import banner from '../assets/Image source 1.png'
import '../styles/home_page.css'

function Banner (){
    return <div className='banner'>
        <img src={banner} className="" alt="banner" />
        <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>
    </div>
}

export default Banner;