import type { FC } from 'react';
import "./_Header.scss";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'

const Header: FC = () => {
  return (
     <header className='header'>
      <div className='header__container'>
        {/* <img src={logo} alt="" /> */}
        <h1 className='header__title'>La Kate des Sens</h1>

        <nav className='header__nav'>
          <NavLink 
            className={({ isActive }) => (
              isActive ? 'link active' 
              : 'link inactive'
            )}
            title="Accueil" 
            to={"/home"}>
                Accueil
          </NavLink>

          <NavLink
            className={({ isActive }) => (
              isActive ? 'link active' 
              : 'link inactive'
            )} 
            title="Prestations" 
            to={"/prestations"}>
                Prestations
          </NavLink>

          <NavLink
            className={({ isActive }) => (
              isActive ? 'link active' 
              : 'link inactive'
            )} 
            title="Tarifs" 
            to={"/tarifs"}>
                Tarifs
          </NavLink>

          <NavLink
            className={({ isActive }) => (
              isActive ? 'link active' 
              : 'link inactive'
            )} 
            title="Qui suis-je ?" 
            to={"/qui-suis-je"}>
                Qui suis-je ?
          </NavLink>

          <NavLink
            className={({ isActive }) => (
              isActive ? 'link active' 
              : 'link inactive'
            )} 
            title="Contact" 
            to={"/contact"}>
                Contact
          </NavLink>

          <NavLink
            className={({ isActive }) => (
              isActive ? 'link active' 
              : 'link inactive'
            )} 
            title="Réserver" 
            to={"/reserver"}>
                Réserver
          </NavLink>

          <div className='header__container__icons'>
            <NavLink
              className="link icon" 
              title="Page Instagram" 
              to={"/instagram"}>
              <FontAwesomeIcon icon={faInstagram} />
            </NavLink>

            <NavLink
              className="link icon" 
              title="Page Facebook" 
              to={"/facebook"}>
              <FontAwesomeIcon icon={faSquareFacebook} />
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;