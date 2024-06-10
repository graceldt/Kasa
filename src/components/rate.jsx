
import React from "react";
import Star from '../assets/Vector _1.svg'
import super_star from '../assets/Vector.svg'


const Rating = (props) => {
    const rating = Number(props.rating_number);

    return (
        <div>
            {[...Array(5)].map((_, index) =>
                index < rating ? 
                <img src={super_star} alt="rating"  key= {index}/> : 
                <img src={Star} alt="rating" key= {index}/> 
            )}
        </div>
    )
}











export default Rating;