import { useState, useRef } from "react";

export default function AccordionItem({
  name = "accordionItem",
  HeadSection = () => <p>Hello!</p>,
  MainSection = () => <p>This is the main text!</p>,
  handleClick = () => {},
}) {
  const [open, setOpen] = useState(false);
  const itemRef = useRef(null);

  return (
    <div
      id={name}
      onClick={() => handleClick([open, setOpen], itemRef)}
      ref={itemRef}
    >
      <HeadSection />
      {open ? <MainSection /> : null}
    </div>
  );
}
