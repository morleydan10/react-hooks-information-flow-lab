import React from "react";

function Header({isDarkMode, setIsDarkMode, onClick }) {
    return(
        <header>
            <h2>Shopster</h2>
            <button onClick={onClick}>
            {isDarkMode ? "Dark" : "Light"} Mode
            </button>
      </header>
    );
    };


export default Header;