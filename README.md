# Component Library React

Just what the name suggests. A library of React components ready to use. This package is available via NPM. Visit the [NPM package page](https://www.npmjs.com/package/component-library-react).

> Unopinionated and unstyled by choice.

## List of components available

- [x] [Carousel](#carousel)
- [x] [NavButton](#navbutton)
- [x] [NavBar](#navbar)
- [x] [SPAContainer](#spacontainer)
- [x] [Checklist](#checklist)
- [ ] Selector

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

> ![ALERT](./alert.svg) **I am available to be hired full-time, part-time or freelance.**
>
> [![buymeacoffee](<https://img.buymeacoffee.com/button-api/?text=Buy me a book&emoji=📖&slug=quantumcorn&button_colour=bf1d55&font_colour=ffffff&font_family=Comic&outline_colour=ffffff&coffee_colour=FFDD00>)](https://www.buymeacoffee.com/quantumcorn)
>
> [![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/R5R7O37GT)

---

## CHANGELOG

- v4.0.0- **All the versions before this have been deprecated because they are broken.**
- v4.0.1- Add changelog to the README. Change the SPAContainer return layout and naming logic. Fix a non-fatal error in SPAContainer logic.
- v4.1.0 - Upgrade `Carousel` to add multiple display feature.
- [ ] Upgrade `Carousel` to add infinite auto-scrolling.
- [ ] Add Selector.

## Documentation

This documentation lists the available components and their properties. To examine the DOM structure returned by the components, pleases use the browser DevTools the relevant information is added to the documentation.

### `Carousel`

#### API

`<Carousel name="catalog" cards= [Item1, Item2, Item3, Item4] count={2}/>`

- `cards` - Accepts an array of Components, where each Component is a card in the carousel.

  > ![ALERT](./alert.svg) You need to **pass the Components** here i.e. `Content` instead of the JSX literals i.e. `<Content />`.

- `Buttons` - Accepts an object containing React components that return the content of the left and the right button in the following structure `{ left, right }`.

- `Markers` - Accepts an object containing React components that return the content marker buttons in the following structure `{ inactive, active }`.

- `name` - Accepts a string. This is used to give `class` and `id` to various elements within the component.

- `count` - Accepts a number. This in number of cards to display at a time.

#### DOM

```html
<div id="{name}">
  <button id="{name}LeftButton">
    <Buttons.left />
  </button>
  <div id="{name}Main">
    <div id="{name}Content">
      <Card />
      ...
    </div>
    <div id="{name}Markerset">
      <button id="{name}Marker{index}"><Markers.active/inactive /></button>
    </div>
  </div>
  <button id="{name}RightButton">
    <Buttons.right />
  </button>
</div>
```

### `NavButton`

`<NavButton target="/">Home</ NavButton>`

- `target` - Accepts a string for the target route.
- Add children between opening and closing tags freely.

  > ![ALERT](./alert.svg) `<NavButton>` is a functional empty container. Be sure provide the `children`.

- [ ] Optimize components
- [ ] Add DOM structure to documentation.

### `NavBar`

`<NavBar name="mainNav" buttons={[["Home", "/"], ["Contact", "/contact"]]}`

- `name` - Accepts a string, used to give `class` and `id` to various elements.
- `buttons` - Accepts an array of arrays. Each internal array contains 2 string values

  - `[0]` - The content of the button. It can be anything that can be directly rendered between opening and closing tags of [NavButton](#navbutton) - mainly strings or JSX literals.

    > ![ALERT](./alert.svg) You need to **pass the JSX literal** i.e. `<Content />` instead of the functional component i.e. `Content` here.

  - `[1]` - Accepts a string corresponding to the target route.

- [ ] Optimize components
- [ ] Add DOM structure to documentation.

### `SPAContainer`

`<SPAContainer name="app" pages={[["Home", "/", <Home />], ["Contact", "/contact", <Contact />]]} />`

- `name` - Accepts a string, used to give `class` and `id` to various elements.
- `pages` - Accepts an array of arrays. Each internal array contains 3 string values

  - `[0]` - The content of the button. It can be anything that can be directly rendered between opening and closing tags of [NavButton](#navbutton) - mainly strings or JSX literals.

    > ![ALERT](./alert.svg) You need to **pass the JSX literal** i.e. `<Content />` instead of the functional component i.e. `Content` here.

  - `[1]` - Accepts a string corresponding to the target route.
  - `[2]` - Accepts a JSX literal which is displayed as the contents of the route.

- [ ] Optimize components
- [ ] Add DOM structure to documentation.

### `Checklist`

`<Checklist name="checklist" cards={cardSet}/>`

- `name` - Accepts a string, used to give `class` and `id` to various elements.
  - `values` - Accepts an array (of strings, or other simple data types). Each of these items is assigned as the `value` of each checklist item, which is submitted when the form is submitted.
- `cards` - Accepts an array of Components, where each Component is an item in the checklist. The order of `values` and ust be the same as that of these components.

  > ![ALERT](./alert.svg) You need to **pass the Components** here i.e. `Content` instead of the JSX literals i.e. `<Content />`.
  >
  > - It is recommended to have a container element like `<div>` as the top-level element.
  > - This component also needs to carry it's own check toggle logic.
  > - The `<Checklist>` manages it as a form element.

- [ ] Optimize components
- [ ] Add DOM structure to documentation.
