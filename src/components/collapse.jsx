import { useState } from "react";
import arrowup from '../assets/arrow_back.svg';
import arrowdown from '../assets/arrow_2.svg';





const Collapse =(props)=>{

    const [open, setOpen] = useState(false);
    const toggle = () =>{
        setOpen(!open)
    };

    
    return(
        <div className="collapse">
            <div className="info-collapse" onClick={toggle}>{props.label}
            <span className="arrow-collapse">
            {open ? 
                
                <img src={arrowdown} className="arrowdown" alt="arrowdown" />:
                <img src={arrowup} className="arrowup" alt="arrowup" />
            }
            </span>
            </div>
            
            {open && 
            <div className="toggle">{props.children}</div>}
            
        </div>
    );
};
    

    export default Collapse;
  