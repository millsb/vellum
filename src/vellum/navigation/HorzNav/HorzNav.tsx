import {StatelessComponent} from "react";
import * as React from "react";
import "./horz-nav.scss";

export interface NavItem {
    label: string;
    href: string;
}

export interface NavItems extends Array<NavItem> {}

export interface HorzNavProps {
    items: NavItems;
}

const renderItems = (items: NavItems) => {
    return items.map((i) => <li><a href={i.href}>{i.label}</a></li>);
};

export const HorzNav: StatelessComponent<HorzNavProps> = ({items}) => {
    return (
        <nav className="horz-nav">
            <ul className="horz-nav__list">
                {renderItems(items)}
            </ul>
        </nav>
    );
}