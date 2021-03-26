import React from 'react'
  

const Accordion = ( {items} ) => {
    const renderedItems = items.map(item => {
        return <div>
            <div className="title active">
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className="content active">
                <p>{item.content}</p>
            </div>
        </div>
    })


    return (
        <div>
            <h1>{items.length}</h1>
        </div>
    )
}

export default Accordion
