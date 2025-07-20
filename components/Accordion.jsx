import AccordionItem from "./AccordionItem.jsx";

export default function Accordion({
  name = "accordion",
  entries = [
    [() => <p>Hello</p>, () => <p>This is the main text</p>],
    [() => <p>Hello</p>, () => <p>This is the main text</p>],
  ],
}) {
  let openSetter = null;

  function handleClick([open, setOpen], itemRef) {
    if (!open) {
      if (openSetter != null) openSetter(false);
      openSetter = setOpen;
    }
    setOpen(!open);
  }

  return (
    <div id={name}>
      {entries.map(([Head, Main], index) => {
        return (
          <AccordionItem
            name={name.concat("Item", index)}
            HeadSection={Head}
            MainSection={Main}
            handleClick={handleClick}
            key={index}
          />
        );
      })}
    </div>
  );
}
