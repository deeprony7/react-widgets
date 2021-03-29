import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link className="item" to="/">Accordion</Link>
            <Link className="item" to="/list">Search Wiki</Link>
            <Link className="item" to="/dropdown">Dropdown</Link>
            <Link className="item" to="/translate">Translate</Link>
        </div>
    )
}

export default Header
