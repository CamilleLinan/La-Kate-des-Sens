import type { ComponentType, FC, ReactNode, SVGProps } from "react";
import "./_CustomList.scss";

interface CustomListProps {
  items: (string | ReactNode)[];
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  className?: string;
}

const CustomList: FC<CustomListProps> = ({ items, icon: Icon, className }) => {
  return (
    <ul className={`custom__list ${className || ""}`}>
      {items.map((item, i) => (
        <li key={i} className="custom__list__item">
          {Icon && (
            <span className="custom__list__icon">
              <Icon />
            </span>
          )}
          <span className="custom__list__text">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default CustomList;
