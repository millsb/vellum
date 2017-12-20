import React from "react";
import PropTypes from "prop-types";
import "./container.scss";

const Container = ({children}) => (
  <section className="container">
      {children}
  </section>
);

Container.propTypes = {
    children: PropTypes.element
};

export default Container;
