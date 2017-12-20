import React from "react";
import PropTypes from "prop-types";

const Container = ({children}) => (
  <section className="container">
      {children}
  </section>
);

Container.propTypes = {
    children: PropTypes.element
};

export default Container;