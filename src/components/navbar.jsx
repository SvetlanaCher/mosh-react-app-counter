import React from 'react'


//stateless functional component
//функциональный компонент без сохранения состояния
const NavBar = ({totalCounters}) => {
    console.log('NavBar - Rendered')
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar
                <span className="badge bg-secondary">
                    {totalCounters} 
                </span>
            </a>
        </nav>
     );
};
 
export default NavBar;