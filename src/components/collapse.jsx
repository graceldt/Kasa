import { useState } from "react";
import arrowback from '../assets/arrow_back.svg';
import arrowtop from '../assets/arrow_2.svg'




const Collapse =(props)=>{

    const [open, setOpen] = useState(false);
    const toggle = () =>{
        setOpen(!open)
    };

    
    return(
        <div className="collapse">
            <span className="info-collapse" onClick={toggle}>{props.label}
            {open ? 
                <img src={arrowback} className="arrowback" alt="arrowback" /> :
                <img src={arrowtop} className="arrowback" alt="arrowback" />
            }
            </span>
            
            {open && 
            <div className="toggle">{props.children}</div>}
            
        </div>
    );
};
    

    export default Collapse;
  