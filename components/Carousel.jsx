import { useState } from "react";

import { getContent, newStart } from "./carouselBuilder.js";
import {
  cardsDefault,
  buttonsDefault,
  markersDefault,
} from "./carouselDefault.jsx";

export default function Carousel({
  cards = cardsDefault,
  Buttons = buttonsDefault,
  Markers = markersDefault,
  name = "carousel",
  count = 1,
}) {
  if (cards.length < count)
    return (
      <p>
        Number of cards provided cannot be less than the count of cards to show.
      </p>
    );

  const [start, setStart] = useState(0);

  return (
    <div id={name}>
      <button
        id={name.concat("LeftButton")}
        onClick={() => {
          setStart(newStart(cards.length, start, "left"));
        }}
      >
        <Buttons.left />
      </button>
      <div id={name.concat("Main")}>
        <div id={name.concat("Content")}>
          {getContent(cards, start, count).map((Card, index) => (
            <Card key={index} />
          ))}
        </div>
        {count != 1 ? null : (
          <div id={name.concat("Markerset")}>
            {cards.map((img, index) => {
              let Marker;
              if (index != start) Marker = Markers.inactive;
              else Marker = Markers.active;
              return (
                <button
                  id={name.concat("Marker", index)}
                  key={index}
                  onClick={() => {
                    setStart(index);
                  }}
                >
                  <Marker />
                </button>
              );
            })}
          </div>
        )}
      </div>
      <button
        id={name.concat("RightButton")}
        onClick={() => {
          setStart(newStart(cards.length, start, "right"));
        }}
      >
        <Buttons.right />
      </button>
    </div>
  );
}
