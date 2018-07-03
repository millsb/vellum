import React from "react";

const Swatch = ({value, name}) => {

  const swatchStyles = {
    backgroundColor: value,
    width: "45px",
    height: "45px"
  };

  return (
    <figure>
      <div style={swatchStyles}>&nbsp;</div>
      <figcaption>
        <span>{name}</span>
        <span>{value}</span>
      </figcaption>
    </figure>
  );
};

export default Swatch
