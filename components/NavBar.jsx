import NavButton from "./NavButton";

export default function NavBar({ buttons = [["Home", "/"]], name = "navbar" }) {
  return (
    <div className={name} id={name}>
      {buttons.map((button, index) => {
        return (
          <NavButton
            className={name.concat(" button")}
            key={button[0]}
            id={name.concat("Button", button[0])}
            target={button[1]}
          >
            {button[0]}
          </NavButton>
        );
      })}
    </div>
  );
}
