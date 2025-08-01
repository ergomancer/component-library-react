export const cardsDefault = [
  () => {
    return (
      <div>
        <p>Hello...</p>
      </div>
    );
  },
  () => {
    return (
      <div>
        <p>World!</p>
      </div>
    );
  },
  () => {
    return (
      <div>
        <p>Happy</p>
      </div>
    );
  },
  () => {
    return (
      <div>
        <p>Building</p>
      </div>
    );
  },
  () => {
    return (
      <div>
        <p>With</p>
      </div>
    );
  },
  () => {
    return (
      <div>
        <p>Handy</p>
      </div>
    );
  },
  () => {
    return (
      <div>
        <p>Components</p>
      </div>
    );
  },
];

function CarouselLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#e3e3e3"
    >
      <path d="M433.62-297.62v-363L251.38-480l182.24 182.38ZM529-128h65v-704h-65v704Z" />
    </svg>
  );
}
function CarouselRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#e3e3e3"
    >
      <path d="M366-128v-704h65v704h-65Zm160.38-169.62v-363L708.62-480 526.38-297.62Z" />
    </svg>
  );
}
function CarouselInactive() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      viewBox="0 -960 960 960"
      width="20px"
      fill="#e3e3e3"
    >
      <path d="M480.39-262Q391-262 326.5-326.11q-64.5-64.1-64.5-153.5 0-89.39 64.11-153.89 64.1-64.5 153.5-64.5 89.39 0 153.89 64.11 64.5 64.1 64.5 153.5 0 89.39-64.11 153.89-64.1 64.5-153.5 64.5Z" />
    </svg>
  );
}
function CarouselActive() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#e3e3e3"
    >
      <path d="M480-304q73.62 0 124.81-51.19T656-480q0-73.62-51.19-124.81T480-656q-73.62 0-124.81 51.19T304-480q0 73.62 51.19 124.81T480-304Zm.17 204q-78.81 0-148.21-29.91T211.23-211.1q-51.34-51.28-81.28-120.59Q100-401.01 100-479.83q0-79.07 29.97-148.69t81.35-121.13q51.38-51.5 120.59-80.92Q401.13-860 479.83-860q79.06 0 148.67 29.39 69.62 29.39 121.13 80.85 51.52 51.46 80.94 121.02Q860-559.18 860-480.09t-29.39 148.15q-29.39 69.06-80.84 120.49-51.44 51.44-120.98 81.45-69.55 30-148.62 30Zm-.17-54q136.51 0 231.26-94.74Q806-343.49 806-480t-94.74-231.26Q616.51-806 480-806t-231.26 94.74Q154-616.51 154-480t94.74 231.26Q343.49-154 480-154Z" />
    </svg>
  );
}

export const buttonsDefault = { left: CarouselLeft, right: CarouselRight };

export const markersDefault = {
  inactive: CarouselInactive,
  active: CarouselActive,
};
