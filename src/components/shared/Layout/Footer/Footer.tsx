import type { FC } from "react";
import "./_Footer.scss";
import { NavLink, useLocation } from "react-router-dom";
import logo from "@assets/logo/logo.png";
import DisplayContactInfo from "@components/shared/DisplayContactInfo/DisplayContactInfo";

const Footer: FC = () => {
  const location = useLocation();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    to: string
  ) => {
    if (location.pathname === to) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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
                <NavLink
                  to="/prestations"
                  onClick={(e) => handleNavClick(e, "/prestations")}
                >
                  Mes prestations
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/qui-suis-je"
                  onClick={(e) => handleNavClick(e, "/qui-suis-je")}
                >
                  Qui suis-je ?
                </NavLink>
              </li>
              <li>
                <NavLink to="/offres">Offres & Avantages</NavLink>
              </li>
              <li>
                <NavLink to="/avis">Avis Clients</NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={(e) => handleNavClick(e, "/contact")}
                >
                  Formulaire de Contact
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="">Mentions légales</NavLink>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>

      <p className="footer__copyright">
        Dev by Liñan Camille with React — &copy; {new Date().getFullYear()},
        Tous droits réservés
      </p>
    </footer>
  );
};

export default Footer;
