import React from 'react';
import {NavLink} from 'react-router-dom'

const Nav = ()=>{
    return (
        <div className='myNav'>
            <div className='navItems'>
                <NavLink to='/'><p>HOME</p></NavLink>
                <NavLink to='/recipelist'><p>RECIPE</p></NavLink>
            </div>          
        </div>
    )
}

export default Nav