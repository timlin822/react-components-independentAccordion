import {FaPlus} from 'react-icons/fa';

import './Accordion.css';

const AccordionItem=({accordion,index,isSelect,toggleHandler})=>{
    return (
        <div className="accordion-item" onClick={()=>toggleHandler(index)}>
            <div className="accordion-question">{accordion.question}<FaPlus className={isSelect?"accordion-icon rotate":"accordion-icon"} /></div>
            <div className={isSelect?"accordion-answer accordion-answer-open":"accordion-answer accordion-answer-close"}>{accordion.answer}</div>
        </div>
    );
}

export default AccordionItem;