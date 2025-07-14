import type { FC } from 'react';
import "./_Header.scss";
import { NavLink } from 'react-router-dom';

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
            title="View Current Employees" 
            to={"/prest"}>
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
            title="Prendre RDV" 
            to={"/rdv"}>
                Prendre RDV
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;