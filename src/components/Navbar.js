import React from "react";

const Navbar = () => {
    const logo = "https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png"
    return (
        <nav>
            <img className="nav__logo" src={logo} alt="Pokemon logo"/>
        </nav>
    )
}

export default Navbar