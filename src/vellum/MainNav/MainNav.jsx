import React from "react";
import PropTypes from "prop-types";
import "./main-nav.scss";
import Link from "../../vellum/VellumLink";

export const MainNav = ({items}) => {
    const list = items.map((item, i) => (
        <li key={i} className="main-nav__item">
            <Link to={item.href}>{item.label}</Link>
        </li>
    ));

    return (
        <nav className="main-nav">
            <ul className="main-nav__list">
                {list}
            </ul>
        </nav>
    );
};

MainNav.propTypes = {
    items: PropTypes.array,
};
