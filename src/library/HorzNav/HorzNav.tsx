import {StatelessComponent} from "react";
import * as React from "react";
import "./horz-nav.scss";
import Link from "gatsby-link";

export interface NavItem {
    label?: string;
    href?: string;
}

export interface NavItems extends Array<NavItem> {
}

export interface HorzNavProps {
    items: NavItems;
}

export const HorzNav: StatelessComponent<HorzNavProps> = ({items}) => {
    const list = items.map((item, i) => (
        <li key={i} className="horz-nav__item">
            <Link to={item.href}>{item.label}</Link>
        </li>
    ));

    return (
        <nav className="horz-nav">
            <ul className="horz-nav__list">
                {list}
            </ul>
        </nav>
    );
};
