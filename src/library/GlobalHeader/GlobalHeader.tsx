import * as React from "react";
import {StatelessComponent} from "react";
import Link from "gatsby-link";
import {MainNav} from "../MainNav";
import "./global-header.scss";
import {NavItem} from "../../interfaces/Navigation";

export interface GlobalHeaderProps {
    style?: object;
    siteTitle: string;
    navItems: NavItem[];
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
                <MainNav items={navItems}/>
            </div>
        </header>
    );
};

export default GlobalHeader;
