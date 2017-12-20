import React from "react";
import classnames from "classnames";
import "./grid.scss";
import PropTypes from "prop-types";

const GridArea = ({children, area}) => (
    <div className={classnames("grid__area", area)}>
        {children}
    </div>
);

GridArea.propTypes = {
    children: PropTypes.element,
    area: PropTypes.string.isRequired
};

export default GridArea;
