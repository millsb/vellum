import React from "react";
import "./grid.scss";
import PropTypes from "prop-types";


export const GridGolden = ({children}) => (
  <div className="grid--golden">
      {children}
  </div>
);

GridGolden.propTypes = {
  children: PropTypes.element
};

export default GridGolden;
