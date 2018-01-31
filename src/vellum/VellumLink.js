import React from "react";
import PropTypes from "prop-types";
import GatsbyLink from "gatsby-link";

const NavLinkPropTypes = {
    activeClassName: PropTypes.string,
    activeStyle: PropTypes.object,
    exact: PropTypes.bool,
    strict: PropTypes.bool,
    isActive: PropTypes.func,
    location: PropTypes.object,
};

const GatsbyLinkPropTypes = {
    ...NavLinkPropTypes,
    innerRef: PropTypes.func,
    onClick: PropTypes.func,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

const VellumLink = (props, context) => {
    return context.router
        ? (<GatsbyLink {...props} />)
        : (<a href={props.to} className={props.className} onClick={props.onClick}>{props.children}</a>);
};

VellumLink.contextTypes = {
    router: PropTypes.object
};

VellumLink.propTypes = {
    ...GatsbyLinkPropTypes
};

export default VellumLink;

