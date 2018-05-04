import * as React from "react";
import PropTypes from "prop-types";
import Link from "../../vellum/VellumLink";
import { MainNav } from "../MainNav/MainNav";
import "./global-header.scss";

const propTypes = {
  /** A string of inline styles */
  style: PropTypes.string,
  /** Title of the site */
  siteTitle: PropTypes.string.isRequired,
  navItems: PropTypes.array
};

const defaultProps = {
  siteTitle: "Site Title"
};

/*
 * Website Global Header
 */
const GlobalHeader = ({ siteTitle, navItems, style }) => {
  return (
    <header className={"global-header"} style={style}>
      <div className="global-header__brand">
        <Link className={"global-header__title"} to="/">
          <span>{siteTitle}</span>
        </Link>
      </div>
      <div className="global-header__nav">
        <MainNav items={navItems} />
      </div>
    </header>
  );
};

GlobalHeader.propTypes = propTypes;
GlobalHeader.defaultProps = defaultProps;

export default GlobalHeader;
