import {StatelessComponent} from "react";
import * as React from "react";
import "./main-nav.scss";
import Link from "gatsby-link";
import {NavItem} from "../../interfaces/Navigation";

export interface MainNavProps {
    items: NavItem[];
    inverted?: boolean;
}

export const MainNav: StatelessComponent<MainNavProps> = ({items, inverted = false}) => {
    const list = items.map((item: NavItem, i: any) => (
        <li key={i} className="main-nav__item">
            <Link to={item.href}>{item.label}</Link>
        </li>
    ));

    const navClass = inverted ? "main-nav" : "main-nav main-nav--inverted";
    return (
        <nav className={navClass}>
            <ul className="main-nav__list">
                {list}
            </ul>
        </nav>
    );
};
