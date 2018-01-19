import * as React from "react";
import {NavItem} from "../../interfaces/Navigation";
import {StatelessComponent} from "react";
import Link from "gatsby-link";

interface ListNavProps {
    items: NavItem[];
};

const ListNav: StatelessComponent<ListNavProps> = ({items}) => {
    const list = items.map((item: NavItem, i: any) => (
        <li key={i} className="list-nav__item">
            <i className="material-icons md-18">{item.icon}</i><Link to={item.href}>{item.label}</Link>
        </li>
    ));

    return (
        <nav className="list-nav">
            <ol className="list-nav__list">
                {list}
            </ol>
        </nav>
    );
};

export default ListNav;
