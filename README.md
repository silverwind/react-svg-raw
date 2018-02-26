# react-svg-raw
[![](https://img.shields.io/npm/v/react-svg-raw.svg?style=flat)](https://www.npmjs.org/package/react-svg-raw) [![](https://img.shields.io/npm/dm/react-svg-raw.svg)](https://www.npmjs.org/package/react-svg-raw) [![](https://api.travis-ci.org/silverwind/react-svg-raw.svg?style=flat)](https://travis-ci.org/silverwind/react-svg-raw)
> React Component for wrapper-less inline SVGs

Unlike [other](https://github.com/MoOx/react-svg-inline) [modules](https://github.com/gilbarbara/react-inlinesvg), this module will not create a wrapper element around the SVG but instead render it as-is.

Every prop on the component except `src` will be copied to the resulting SVG. No effort on post-processing the SVG is taken by this module.

## Install

```console
$ npm i react-svg-raw
```

## Usage
```jsx
import SVG from "react-svg-raw";

export default () => (
  <main>
    <SVG className="foo" src={"<svg></svg>"}/>
  </main>
)

```

© [silverwind](https://github.com/silverwind), distributed under BSD licence
