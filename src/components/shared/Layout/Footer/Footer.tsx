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

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h4 className="footer-logo">La Kate des Sens</h4>

        <nav>
          <h4 className="footer-title">Me Contacter</h4>
          <div className="underline"></div>
          <p>
            <EnvironmentOutlined /> Massage bien-être à domicile — Granchain &
            alentours
          </p>
          <p>
            <UserOutlined /> Catherine
          </p>
          <p>
            <PhoneOutlined /> 06 12 34 56 78
          </p>
          <p>
            <MailOutlined /> contact@lakatedessens.fr
          </p>

          <div className="footer-container-icons">
            <NavLink
              className="link icon"
              title="Page Instagram"
              to={"/instagram"}
            >
              <InstagramOutlined />
            </NavLink>

            <NavLink
              className="link icon"
              title="Page Facebook"
              to={"/facebook"}
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

      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} La Kate des Sens — Tous droits
        réservés
      </p>
    </footer>
  );
};

export default Footer;
