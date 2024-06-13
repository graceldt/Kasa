import "../styles/slideshow .css";
import { useState } from "react";
import arrow_next from '../assets/next.svg'
import arrow_previous from '../assets/previous.svg'



const Slideshow  = ({slides}) => {
    const [active, setActive] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setActive(active === length - 1 ? 0 : active + 1)
    }

    const prevSlide = () => {
        setActive(active === 0 ? length - 1 : active - 1)
    };
    return (
            <div className="slider">
                {
                    length > 1 ? 
                    <>
                        <img src={arrow_previous} className="arrow_previous" alt="arrow previous" onClick={prevSlide}/>
                        <img src={arrow_next} className="arrow_next" alt="arrow next" onClick={nextSlide} />
                        <span className="slider__number">{active + 1}/{length}</span>
                    </> 
                    : ''
                }
                {slides.map((slide, index) => {
                    return (
                        <div key={index}>
                            {index === active && (
                                <img src={slide} className='slider__img'/>
                            )}    
                        </div>
                    )
                })}
            </div>
    );
}

export default Slideshow ;

