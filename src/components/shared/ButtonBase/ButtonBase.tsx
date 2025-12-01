import type { ButtonHTMLAttributes, FC, ReactNode } from "react";
import "./_ButtonBase.scss";
import { useNavigate } from "react-router-dom";

export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnContent: ReactNode;
  link?: string;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
}

const ButtonBase: FC<BtnProps> = ({ btnContent, link, variant, className }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => link && navigate(link)}
      className={`btn 
        ${variant ? `btn__${variant}` : ""} 
        ${className ? `${className}` : ""}`}
    >
      {btnContent}
    </button>
  );
};

export default ButtonBase;
