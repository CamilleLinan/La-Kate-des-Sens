import type { ButtonHTMLAttributes, FC, ReactNode } from "react";
import "./_ButtonBase.scss";
import { useNavigate } from "react-router-dom";

export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnContent: ReactNode;
  link?: string;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
}

const ButtonBase: FC<BtnProps> = ({
  btnContent,
  link,
  variant,
  className,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (onClick) onClick(e);
    if (link) navigate(link);
  };

  return (
    <button
      onClick={handleClick}
      className={`btn 
        ${variant ? `btn__${variant}` : ""} 
        ${className ? `${className}` : ""}`}
    >
      {btnContent}
    </button>
  );
};

export default ButtonBase;
