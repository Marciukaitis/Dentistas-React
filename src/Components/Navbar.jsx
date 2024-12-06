import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/navbar.css"
import { useDentistState } from '../Context/GlobalContext';


const Navbar = () => {
  const { state, dispatch } = useDentistState(); 

  const handleThemeToggle = () => {
    dispatch({ type: "TOGGLE_THEME" }); 
  };
  return (
    <nav className={`navbar ${state.theme ? "light-mode" :"dark-mode" }`}>
      <div className="navbar-container">
        <Link to="/">
        </Link>
        <div className="nav-links">
          <Link to="/" >Home</Link>
          <Link to="/contact" >Contacto</Link>
          <Link to="/favs" >Favs</Link>
        </div>
        <button onClick={handleThemeToggle} className="theme-toggle">
          {state.theme ? "🌙 " : "🌞 "}
        </button>
      </div>
    </nav>
  );
};

export default Navbar