import { useRef } from "react";

export default function Card({
  name = "card",
  children,
  behavior = () => {},
  style = {
    border: "1px solid",
    borderRadius: "7.5px",
    boxShadow: "0 2px 5px 0 grey",
  },
}) {
  const cardRef = useRef(null);

  /** func exposes the returned DOM element for further customization */
  behavior(cardRef);

  return (
    <div id={name} ref={cardRef} style={style}>
      {children}
    </div>
  );
}
