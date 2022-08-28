import {useState} from 'react';

import AccordionItem from './AccordionItem';

import ACCORDIONS_DATA from 'data/AccordionsData';

import './Accordion.css';

const Accordion=()=>{
    const [selectAccordion,setSelectAccordion]=useState(Array(ACCORDIONS_DATA.length).fill(false));
    
    const toggleHandler=(i)=>{
        setSelectAccordion(selectAccordion.map((value,index)=>index===i ? !value : value));
    };
    
    return (
        <div className="accordion">
            {ACCORDIONS_DATA.map((accordion,index)=>(
                <AccordionItem key={accordion.id} accordion={accordion} index={index} isSelect={selectAccordion[index]} toggleHandler={toggleHandler} />
            ))}
        </div>
    );
}

export default Accordion;