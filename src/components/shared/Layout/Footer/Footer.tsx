import type { FC } from "react";
import "./_Footer.scss";
import { NavLink } from "react-router-dom";
import logo from "@assets/logo/logo.png";
import DisplayContactInfo from "@components/shared/DisplayContactInfo/DisplayContactInfo";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={logo} alt="" />

        <div className="footer-container-nav">
          <nav>
            <h4 className="footer-title">Me Contacter</h4>
            <div className="underline"></div>
            <DisplayContactInfo />
          </nav>

          <nav>
            <h4 className="footer-title">Infos Pratiques</h4>
            <div className="underline"></div>
            <ul>
              <li>
                <NavLink to="/prestations">Mes prestations</NavLink>
              </li>
              <li>
                <NavLink to="/qui-suis-je">Qui suis-je ?</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Formulaire de Contact</NavLink>
              </li>
              <li>
                <NavLink to="">CGV & Mentions légales</NavLink>
              </li>
              <li>
                <NavLink to="">Politique de confidentialité</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} La Kate des Sens — Tous droits
        réservés
      </p>
    </footer>
  );
};

export default Footer;
