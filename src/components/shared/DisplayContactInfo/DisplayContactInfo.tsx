import type { FC } from "react";
import "./_DisplayContactInfo.scss";
import {
  UserOutlined,
  FacebookFilled,
  InstagramOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  TikTokFilled,
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
    <div className={bannerMode ? "contact__banner__info" : "info"}>
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

      <p>
        <NavLink
          id="instagram"
          className="link icon"
          title="Page Instagram"
          to={CONTACT_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramOutlined />{" "}
          <span className="link-text">instagram.com/lakatedessens</span>
        </NavLink>
      </p>

      <p>
        <NavLink
          id="facebook"
          className="link icon"
          title="Page Facebook"
          to={CONTACT_INFO.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookFilled />{" "}
          <span className="link-text">facebook.com/lakatedessens</span>
        </NavLink>
      </p>

      <p>
        <NavLink
          id="tiktok"
          className="link icon"
          title="Page TikTok"
          to={CONTACT_INFO.tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TikTokFilled />{" "}
          <span className="link-text">tiktok.com/@lakatedessens</span>
        </NavLink>
      </p>
    </div>
  );
};

export default DisplayContactInfo;
