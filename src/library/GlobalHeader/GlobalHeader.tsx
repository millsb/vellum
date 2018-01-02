import * as React from "react";
import {StatelessComponent} from "react";
import Link from "gatsby-link";
import {HorzNav, NavItems} from "../HorzNav/HorzNav";
import "./global-header.scss";

export interface GlobalHeaderProps {
    style?: object;
    siteTitle: string;
    navItems: NavItems;
}

const GlobalHeader: StatelessComponent<GlobalHeaderProps> = ({siteTitle, navItems, style}) => {
    return (
        <header className={"global-header"} style={style}>
            <div className="global-header__brand">
                <Link className={"global-header__title"} to="/">
                    <span>{siteTitle}</span>
                </Link>
            </div>
            <div className="global-header__nav">
                <HorzNav items={navItems}/>
            </div>
        </header>
    );
};

export default GlobalHeader;
