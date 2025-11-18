import type { FC } from "react";
import "./_Footer.scss";
import { NavLink } from "react-router-dom";
import logo from "@assets/logo/logo.png";
import DisplayContactInfo from "@components/shared/DisplayContactInfo/DisplayContactInfo";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img src={logo} alt="la-kate-des-sens-logo" />

        <div className="footer__container__nav">
          <nav>
            <h4 className="footer__title">Me Contacter</h4>
            <div className="underline"></div>
            <DisplayContactInfo />
          </nav>

          <nav>
            <h4 className="footer__title">Infos Pratiques</h4>
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
                <NavLink to="/offres">Offres & Avantages</NavLink>
              </li>
              <li>
                <NavLink to="">Mentions légales</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <p className="footer__copyright">
        &copy; {new Date().getFullYear()} La Kate des Sens — Tous droits
        réservés
      </p>
    </footer>
  );
};

export default Footer;
