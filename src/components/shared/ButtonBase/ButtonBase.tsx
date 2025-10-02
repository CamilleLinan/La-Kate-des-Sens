import type { ButtonHTMLAttributes, FC, ReactNode } from "react";
import "./_ButtonBase.scss";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  fullWidth?: boolean;
  className?: string;
}

const ButtonBase: FC<BtnProps> = ({
  children,
  variant,
  fullWidth,
  className,
  ...props
}) => {
  return (
    <button
      className={`btn 
        ${variant ? `btn-${variant}` : ""} 
        ${fullWidth ? "btn-full" : ""} 
        ${className ? `${className}` : ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonBase;
