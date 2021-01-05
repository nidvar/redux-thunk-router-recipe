import React from 'react';
import {NavLink} from 'react-router-dom'

const Nav = ()=>{
    return (
        <div>
            <ul>
                <li><NavLink to='/'>HOME</NavLink></li>
                <li><NavLink to='/recipelist'>RECIPES</NavLink></li>
            </ul>
        </div>
    )
}

export default Nav