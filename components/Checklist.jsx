import { useState } from "react";

const texts = ["First", "Second", "Third", "Fourth"];
function Card({ text = "Hello!" }) {
  const [check, setCheck] = useState(false);

  function toggle(e) {
    if (check) e.target.style.color = "white";
    else e.target.style.color = "blue";
    setCheck(!check);
  }

  return (
    <div onClick={(e) => toggle(e)}>
      <p>{text}</p>
    </div>
  );
}

const cardsDefault = texts.map((text, index) => {
  return () => {
    return <Card text={text} key={index} />;
  };
});

export default function Checklist({
  cards = cardsDefault,
  values = texts,
  name = "checklist",
}) {
  return (
    <fieldset name={name} className={name} id={name}>
      {cards.map((Card, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              name={name.concat("Item", index)}
              className={name.concat(" item")}
              id={name.concat("Item", index)}
              style={{ display: "none" }}
              value={values[index]}
            />
            <label
              htmlFor={name.concat("Item", index)}
              style={{
                minWidth: "100",
                display: "block",
              }}
            >
              <Card />
            </label>
          </div>
        );
      })}
    </fieldset>
  );
}
