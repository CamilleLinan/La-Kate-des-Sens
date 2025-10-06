import type { FC } from "react";
import "./_Footer.scss";
import { NavLink } from "react-router-dom";
import {
  UserOutlined,
  FacebookFilled,
  InstagramOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import logo from "@assets/logo/logo.png";
import { CONTACT_INFO } from "@utils/constants";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={logo} alt="" />

        <div className="footer-container-nav">
          <nav>
            <h4 className="footer-title">Me Contacter</h4>
            <div className="underline"></div>
            <p>
              <UserOutlined /> {CONTACT_INFO.name}
            </p>
            <p>
              <EnvironmentOutlined /> {CONTACT_INFO.location}
            </p>
            <p>
              <PhoneOutlined /> {CONTACT_INFO.phone}
            </p>
            <p>
              <MailOutlined /> {CONTACT_INFO.email}
            </p>

            <div className="footer-container-icons">
              <NavLink
                className="link icon"
                title="Page Instagram"
                to={CONTACT_INFO.instagramUrl}
              >
                <InstagramOutlined />
              </NavLink>

              <NavLink
                className="link icon"
                title="Page Facebook"
                to={CONTACT_INFO.facebookUrl}
              >
                <FacebookFilled />
              </NavLink>
            </div>
          </nav>

          <nav>
            <h4 className="footer-title">Infos Pratiques</h4>
            <div className="underline"></div>
            <ul>
              <li>
                <p>Qui suis-je ?</p>
              </li>
              <li>
                <p>Mes prestations</p>
              </li>
              <li>
                <p>CGV</p>
              </li>
              <li>
                <p>Mentions légales</p>
              </li>
              <li>
                <p>Politique de confidentialité</p>
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
