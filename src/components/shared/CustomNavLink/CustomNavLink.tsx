import type { FC, ReactNode } from "react";
import "./_CustomNavLink.scss";
import { NavLink } from "react-router-dom";

interface CustomNavLinkProps {
  title: string;
  linkExt: string;
  navContent: ReactNode;
}

const CustomNavLink: FC<CustomNavLinkProps> = ({
  title,
  linkExt,
  navContent,
}) => {
  return (
    <NavLink
      className="navlink-ext"
      title={title}
      to={linkExt}
      target="_blank"
      rel="noopener noreferrer"
    >
      {navContent}
    </NavLink>
  );
};

export default CustomNavLink;
