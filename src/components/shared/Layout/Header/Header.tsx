import type { FC } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MenuOutlined,
  InstagramOutlined,
  FacebookFilled,
} from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import logo from "@assets/logo/logo_stars.png";
import { CONTACT_INFO } from "@utils/constants";
import "./_Header.scss";

const Header: FC = () => {
  const [visible, setVisible] = useState(false);

  const menuItems = [
    {
      key: "home",
      label: (
        <NavLink
          className={({ isActive }) =>
            isActive ? "link active" : "link inactive"
          }
          to="/home"
        >
          Accueil
        </NavLink>
      ),
    },
    {
      key: "prestations",
      label: (
        <NavLink
          className={({ isActive }) =>
            isActive ? "link active" : "link inactive"
          }
          to="/prestations"
        >
          Prestations & Tarifs
        </NavLink>
      ),
    },
    {
      key: "qui-suis-je",
      label: (
        <NavLink
          className={({ isActive }) =>
            isActive ? "link active" : "link inactive"
          }
          to="/qui-suis-je"
        >
          Qui suis-je ?
        </NavLink>
      ),
    },
    {
      key: "contact",
      label: (
        <NavLink
          className={({ isActive }) =>
            isActive ? "link active" : "link inactive"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      ),
    },
    // {
    //   key: "reserver",
    //   label: (
    //     <NavLink
    //       className={({ isActive }) =>
    //         isActive ? "link active" : "link inactive"
    //       }
    //       to="/reserver"
    //     >
    //       Réserver
    //     </NavLink>
    //   ),
    // },
    {
      key: "social-network",
      label: (
        <div className="header__container__icons">
          <NavLink
            className="link icon"
            to={CONTACT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramOutlined />
          </NavLink>
          <NavLink
            className="link icon"
            to={CONTACT_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookFilled />
          </NavLink>
        </div>
      ),
    },
  ];

  const mobileMenu = <Menu mode="vertical" items={menuItems} />;

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container__logo">
          <img src={logo} alt="Logo" />
          <h1 className="header__title">La Kate des Sens</h1>
        </div>

        {/* Normal Menu */}
        <nav className="header__nav desktop__menu">
          {menuItems.map((item) => (
            <div key={item.key} className="link">
              {item.label}
            </div>
          ))}
        </nav>

        {/* Burger menu */}
        <div className="header__nav mobile__menu">
          <Dropdown
            overlay={mobileMenu}
            trigger={["click"]}
            placement="bottomRight"
            open={visible}
            onOpenChange={(visible: boolean) => setVisible(visible)}
          >
            <MenuOutlined className="burger__icon" />
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default Header;
