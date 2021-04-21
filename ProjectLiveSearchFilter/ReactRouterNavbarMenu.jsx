import React from 'react';
import {Link,NavLink} from 'react-router-dom';
const Menu=()=>
{
    return(
        <>
        <div className="menu_style">
        <NavLink exact activeClassName="active_class"  to="/">About Us</NavLink>
        <NavLink  activeClassName="active_class"  to="/service">Service</NavLink>
        <NavLink  activeClassName="active_class"  to="/search">Search</NavLink>
        <NavLink  activeClassName="active_class"  to="/user"> User</NavLink>
        <NavLink  activeClassName="active_class"  to="/contact">Contact Us</NavLink>
        </div>
        <br/>
        <Link to='/'>About Us</Link>
        <Link to='/contact'>Contact Us</Link>
        <br/>
        <a href="/">About Us</a>
        <a href="/contact">Contact US</a>
        </>
    );
};
export default Menu;