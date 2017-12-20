import React from "react";
import PropTypes from "prop-types";

const BleedArea = ({children, color}) => (
    <div className="bleed-area" style={{backgroundColor: color}}>
        {children}
    </div>
);

BleedArea.propTypes = {
    children: PropTypes.element,
    color: PropTypes.color
};

export default BleedArea;
