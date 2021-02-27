import React from 'react'
import { useHistory } from 'react-router-dom'

import './header.css'

const Header = () => {

    const history = useHistory()

    return (
        <header>
            <div className="header-container">
                <h1 className="lettermark noselect" onClick={() => history.push('/')}>源 YUAN</h1>
                <p className="navbar-item noselect" onClick={() => history.push('/about')}>about</p>
            </div>
        </header>
    )
}

export default Header