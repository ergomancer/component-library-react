# Component Library React

Just what the name suggests. A library of React components ready to use. This package is available via NPM. Visit the [NPM package page](https://www.npmjs.com/package/component-library-react).

> Unopinionated and unstyled by choice.

## List of components available

- [x] [Carousel](#carousel)

## Usage

1. **Install**
   `npm install component-library-react`
2. **Import**
   `import { Carousel } from "component-library-react";`
3. **Use**
   `<Carousel [props]/>`
   > Code editors like VS Code give you a peek into the structure of the `[props]`. Or you can consult the documentation below.

## Documentation

This documentation list the available components and their properties. To examine the DOM structure returned by the components, pleases use the browser DevTools.

### `<Carousel />` {#carousel}

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
