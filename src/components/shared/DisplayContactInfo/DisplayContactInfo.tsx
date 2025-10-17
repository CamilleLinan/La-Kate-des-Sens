import type { FC } from "react";
import "./_DisplayContactInfo.scss";
import {
  UserOutlined,
  FacebookFilled,
  InstagramOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { CONTACT_INFO } from "@utils/constants";
import { NavLink } from "react-router-dom";

interface DisplayContactInfoProps {
  bannerMode?: boolean;
}

const DisplayContactInfo: FC<DisplayContactInfoProps> = ({
  bannerMode = false,
}) => {
  return (
    <div className={bannerMode ? "banner-contact-info" : "contact-info"}>
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

      {/* <div className="container-icons"> */}
      <p>
        <NavLink
          className="link icon"
          title="Page Instagram"
          to={CONTACT_INFO.instagramUrl}
        >
          <InstagramOutlined /> instagram.com/lakatedessens
        </NavLink>
      </p>

      <p>
        <NavLink
          className="link icon"
          title="Page Facebook"
          to={CONTACT_INFO.facebookUrl}
        >
          <FacebookFilled /> facebook.com/lakatedessens
        </NavLink>
      </p>
      {/* </div> */}
    </div>
  );
};

export default DisplayContactInfo;
