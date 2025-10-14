import type { FC, ReactNode } from "react";
import "./_CustomQuote.scss";

interface CustomQuoteProps {
  text: string | ReactNode;
}

const CustomQuote: FC<CustomQuoteProps> = ({ text }) => {
  return (
    <div className="quote">
      <div className="citation">{text}</div>
    </div>
  );
};

export default CustomQuote;
