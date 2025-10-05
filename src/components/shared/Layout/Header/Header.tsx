import type { FC } from "react";
import "./_Header.scss";
import { NavLink } from "react-router-dom";
import { FacebookFilled, InstagramOutlined } from "@ant-design/icons";
import logo from "@assets/logo/logo_stars.png";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container-logo">
          <img src={logo} alt="" />
          <h1 className="header__title">La Kate des Sens</h1>
        </div>

        <nav className="header__nav">
          <NavLink
            className={({ isActive }) =>
              isActive ? "link active" : "link inactive"
            }
            title="Accueil"
            to={"/home"}
          >
            Accueil
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "link active" : "link inactive"
            }
            title="Prestations"
            to={"/prestations"}
          >
            Prestations & Tarifs
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "link active" : "link inactive"
            }
            title="Qui suis-je ?"
            to={"/qui-suis-je"}
          >
            Qui suis-je ?
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "link active" : "link inactive"
            }
            title="Contact"
            to={"/contact"}
          >
            Contact
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "link active" : "link inactive"
            }
            title="Réserver"
            to={"/reserver"}
          >
            Réserver
          </NavLink>

          <div className="header__container__icons">
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
      </div>
    </header>
  );
};

export default Header;
