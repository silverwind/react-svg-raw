import React from "react";

export default class SVG extends React.PureComponent {
  render() {
    if (!this.props.src) throw new Error("Required prop 'src' missing");

    // create a svg node
    const div = document.createElement("div");
    div.innerHTML = this.props.src;
    const svg = div.firstChild;

    // create attributes, set innerHTML
    const attrs = {dangerouslySetInnerHTML: {__html: svg.innerHTML}};

    // copy attributes from the svg source
    if (svg.hasAttributes()) {
      [].slice.call(svg.attributes).forEach(attr => {
        attrs[attr.name] = attr.value;
      });
    }

    // copy attributes from the react component
    Object.keys(this.props).forEach(prop => {
      if (prop === "src") return;
      attrs[prop] = this.props[prop];
    });

    return React.createElement("svg", attrs);
  }
}
