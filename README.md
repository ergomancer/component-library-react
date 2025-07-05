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

---

> - I am available to be hired full-time, part-time or freelance.
> - [![buymeacoffee](<https://img.buymeacoffee.com/button-api/?text=Buy me a book&emoji=📖&slug=quantumcorn&button_colour=bf1d55&font_colour=ffffff&font_family=Comic&outline_colour=ffffff&coffee_colour=FFDD00>)](https://www.buymeacoffee.com/quantumcorn)
> - [![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/R5R7O37GT)

---

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

    > ![NOTE](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48bWFzayBpZD0ibGluZU1kSGF6YXJkTGlnaHRzT2ZmTG9vcDAiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiPjxwYXRoIHN0cm9rZS1kYXNoYXJyYXk9IjI4IiBzdHJva2UtZGFzaG9mZnNldD0iMjgiIGQ9Ik0xMiAxMGw0IDdoLThaIj48YW5pbWF0ZSBmaWxsPSJmcmVlemUiIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1kYXNob2Zmc2V0IiBkdXI9IjAuNHMiIHZhbHVlcz0iMjg7MCIvPjwvcGF0aD48cGF0aCBkPSJNMTIgMTBsNCA3aC04WiIgb3BhY2l0eT0iMCI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZCIgYmVnaW49IjAuNHMiIGR1cj0iMC44cyIga2V5VGltZXM9IjA7MC4yNTsxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmFsdWVzPSJNMTIgMTBsNCA3aC04WjtNMTIgNGw5LjI1IDE2aC0xOC41WjtNMTIgNGw5LjI1IDE2aC0xOC41WiIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGJlZ2luPSIwLjRzIiBkdXI9IjAuOHMiIGtleVRpbWVzPSIwOzAuMTswLjc1OzEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MTsxOzAiLz48L3BhdGg+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtZGFzaGFycmF5PSIyOCIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjI4IiBkPSJNMCAxMWgyNiIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMTIgMTIpIj48YW5pbWF0ZSBmaWxsPSJmcmVlemUiIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1kYXNob2Zmc2V0IiBiZWdpbj0iMC43cyIgZHVyPSIwLjRzIiB2YWx1ZXM9IjI4OzAiLz48L3BhdGg+PHBhdGggc3Ryb2tlLWRhc2hhcnJheT0iMjgiIHN0cm9rZS1kYXNob2Zmc2V0PSIyOCIgZD0iTTAgMTNoMjYiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDEyIDEyKSI+PGFuaW1hdGUgZmlsbD0iZnJlZXplIiBhdHRyaWJ1dGVOYW1lPSJzdHJva2UtZGFzaG9mZnNldCIgYmVnaW49IjAuN3MiIGR1cj0iMC40cyIgdmFsdWVzPSIyODswIi8+PC9wYXRoPjwvZz48L21hc2s+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjZjQ0IiBtYXNrPSJ1cmwoI2xpbmVNZEhhemFyZExpZ2h0c09mZkxvb3AwKSIvPjwvc3ZnPg==)
    > You need to pass the JSX literal i.e. `<Content />` instead of the functional component i.e. `Content` here.

  - `[1]` - Accepts a string corresponding to the target route.

### `SPAContainer`

`<SPAContainer name="app" pages={[["Home", "/", <Home />], ["Contact", "/contact", <Contact />]]} />`

- `name` - Accepts a string, used to give `class` and `id` to various elements.
- `pages` - Accepts an array of arrays. Each internal array contains 3 string values

  - `[0]` - The content of the button. It can be anything that can be directly rendered between opening and closing tags of [NavButton](#navbutton) - mainly strings or JSX literals.

    > ![NOTE](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48bWFzayBpZD0ibGluZU1kSGF6YXJkTGlnaHRzT2ZmTG9vcDAiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiPjxwYXRoIHN0cm9rZS1kYXNoYXJyYXk9IjI4IiBzdHJva2UtZGFzaG9mZnNldD0iMjgiIGQ9Ik0xMiAxMGw0IDdoLThaIj48YW5pbWF0ZSBmaWxsPSJmcmVlemUiIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1kYXNob2Zmc2V0IiBkdXI9IjAuNHMiIHZhbHVlcz0iMjg7MCIvPjwvcGF0aD48cGF0aCBkPSJNMTIgMTBsNCA3aC04WiIgb3BhY2l0eT0iMCI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZCIgYmVnaW49IjAuNHMiIGR1cj0iMC44cyIga2V5VGltZXM9IjA7MC4yNTsxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmFsdWVzPSJNMTIgMTBsNCA3aC04WjtNMTIgNGw5LjI1IDE2aC0xOC41WjtNMTIgNGw5LjI1IDE2aC0xOC41WiIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGJlZ2luPSIwLjRzIiBkdXI9IjAuOHMiIGtleVRpbWVzPSIwOzAuMTswLjc1OzEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjA7MTsxOzAiLz48L3BhdGg+PHBhdGggc3Ryb2tlPSIjMDAwIiBzdHJva2UtZGFzaGFycmF5PSIyOCIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjI4IiBkPSJNMCAxMWgyNiIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMTIgMTIpIj48YW5pbWF0ZSBmaWxsPSJmcmVlemUiIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1kYXNob2Zmc2V0IiBiZWdpbj0iMC43cyIgZHVyPSIwLjRzIiB2YWx1ZXM9IjI4OzAiLz48L3BhdGg+PHBhdGggc3Ryb2tlLWRhc2hhcnJheT0iMjgiIHN0cm9rZS1kYXNob2Zmc2V0PSIyOCIgZD0iTTAgMTNoMjYiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDEyIDEyKSI+PGFuaW1hdGUgZmlsbD0iZnJlZXplIiBhdHRyaWJ1dGVOYW1lPSJzdHJva2UtZGFzaG9mZnNldCIgYmVnaW49IjAuN3MiIGR1cj0iMC40cyIgdmFsdWVzPSIyODswIi8+PC9wYXRoPjwvZz48L21hc2s+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjZjQ0IiBtYXNrPSJ1cmwoI2xpbmVNZEhhemFyZExpZ2h0c09mZkxvb3AwKSIvPjwvc3ZnPg==)
    > You need to pass the JSX literal i.e. `<Content />` instead of the functional component i.e. `Content` here.

  - `[1]` - Accepts a string corresponding to the target route.
  - `[2]` - Accepts a JSX literal which is displayed as the contents of the route.
