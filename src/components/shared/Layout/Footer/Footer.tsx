import type { FC } from "react";
import "./_Footer.scss";
import { NavLink, useLocation } from "react-router-dom";
import logo from "@assets/logo/logo.webp";
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
            <h4 className="footer__title">Liens utiles</h4>
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

          <nav>
            <h4 className="footer__title">Me Trouver</h4>
            <div className="underline"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85965.82588371579!2d0.5876825942134256!3d48.98682816028211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e19e3e28db7b1f%3A0x3c09d16bd6d9856b!2sMesnil-en-Ouche!5e1!3m2!1sfr!2sfr!4v1765230934187!5m2!1sfr!2sfr"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
