# Component Library React

Just what the name suggests. A library of React components ready to use. This package is available via NPM. Visit the [NPM package page](https://www.npmjs.com/package/component-library-react).

> Unopinionated and unstyled by choice.

## List of components available

- [x] [Carousel](#carousel)
- [x] [NavButton](#navbutton)
- [x] [NavBar](#navbar)
- [x] [SPAContainer](#spacontainer)

## Usage

1. **Install**
   `npm install component-library-react`
2. **Import**
   `import { Carousel } from "component-library-react";`
3. **Use**
   `<Carousel [props]/>`
   > Code editors like VS Code give you a peek into the structure of the `[props]`. Or you can consult the documentation below.

## Support Me

I am an independent developer. Your support can help me work better.

> ---
>
> - I am available to be hired full-time, part-time or freelance.
> - [![buymeacoffee](<https://img.buymeacoffee.com/button-api/?text=Buy me a book&emoji=📖&slug=quantumcorn&button_colour=bf1d55&font_colour=ffffff&font_family=Comic&outline_colour=ffffff&coffee_colour=FFDD00>)](https://www.buymeacoffee.com/quantumcorn)
> - [![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/R5R7O37GT)
>
> ---

## Documentation

This documentation lists the available components and their properties. To examine the DOM structure returned by the components, pleases use the browser DevTools until more thorough documentation is possible.

### `Carousel`

`<Carousel imgset={[src, alt]} />`

- `imgset` - **Required** - Accepts an array of objects, where each object is an image in the carousel. The objects have the following structure:

  ```js
  {
    src: "/path/to/image.extension",
    alt: "The alt text for the image"
  }
  ```

- `Buttons` - Accepts an object containing React components that return the content of the left and the right button in the following structure `{ left, right }`.

- `Markers` - Accepts an object containing React components that return the content marker buttons in the following structure `{ inactive, active }`.

- `name` - Accepts a string. This is used to give `class` and `id` to various elements within the component.

### `NavButton`

`<NavButton target="/">Home</ NavButton>`

- `target` - Accepts a string for the target route.
- Add children between opening and closing tags freely.

### `NavBar`

`<NavBar name="mainNav" buttons={[["Home", "/"], ["Contact", "/contact"]]}`

- `name` - Accepts a string, used to give `class` and `id` to various elements.
- `buttons` - Accepts an array of arrays. Each internal array contains 2 string values

  - `[0]` - The content of the button. It can be anything that can be directly rendered between opening and closing tags of [NavButton](#navbutton) - mainly strings or JSX literals.
    > [!IMPORTANT] You need to pass the JSX literal i.e. `<Content />` instead of the functional component i.e. `Content` here.
  - `[1]` - Accepts a string corresponding to the target route.

### `SPAContainer`

`<SPAContainer name="app" pages={[["Home", "/", <Home />], ["Contact", "/contact", <Contact />]]} />`

- `name` - Accepts a string, used to give `class` and `id` to various elements.
- `pages` - Accepts an array of arrays. Each internal array contains 3 string values

  - `[0]` - The content of the button. It can be anything that can be directly rendered between opening and closing tags of [NavButton](#navbutton) - mainly strings or JSX literals.
    > [!IMPORTANT] You need to pass the JSX literal i.e. `<Content />` instead of the functional component i.e. `Content` here.
  - `[1]` - Accepts a string corresponding to the target route.
  - `[2]` - Accepts a JSX literal which is displayed as the contents of the route.
