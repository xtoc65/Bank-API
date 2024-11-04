// Importation de NavLink depuis react-router-dom pour la navigation
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


// Importation de l'image du logo
import Logo from '../assets/Logo.png';
import '../assets/styles/header.css'

function Header() {
    return (
      <header>
        <nav className="nav_container">
          <NavLink to="/">
            <img src={Logo} alt="Logo ArgentBank" />
          </NavLink>
          <div>
            <NavLink className="nav_link" to="/sing-in">
            <FontAwesomeIcon icon={faUserCircle} /> Sign In
            </NavLink>
          </div>
        </nav>
      </header>
    )
  }
  
  export default Header