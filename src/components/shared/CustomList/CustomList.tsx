import type { ComponentType, FC, ReactNode, SVGProps } from "react";
import "./_CustomList.scss";

interface CustomListProps {
  items: (string | ReactNode)[];
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  className?: string;
}

const CustomList: FC<CustomListProps> = ({ items, icon: Icon, className }) => {
  return (
    <ul className={`custom-list ${className || ""}`}>
      {items.map((item, i) => (
        <li key={i} className="custom-list__item">
          {Icon && (
            <span className="custom-list__icon">
              <Icon />
            </span>
          )}
          <span className="custom-list__text">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default CustomList;
