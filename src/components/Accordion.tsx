import React, { useState } from 'react'
import {Item} from '../Item'
  
interface AccordionProps {
    items: Item[],
}

const Accordion = ( props: AccordionProps ) => {
    const [activeIndex, setActiveIndex] = useState<number>(-1)


    const onTitleClick = (index: number) => {
        setActiveIndex(index)
    }

    const renderedItems = props.items.map((item, index) => {
        const active = index === activeIndex ? 'active' : ''

        return <React.Fragment key={item.title}>
            <div 
                className={`title ${active}`}
                onClick={() =>onTitleClick(index)}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    })


    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    )
}

export default Accordion
