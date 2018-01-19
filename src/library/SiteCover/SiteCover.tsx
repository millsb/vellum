import * as React from "react";
import {StatelessComponent} from "react";
import "./site-cover.scss";

interface SiteCoverProps {
    title: string;
    image: string;
}

const SiteCover: StatelessComponent<SiteCoverProps> = ({title, image}) => {
    const styles = {backgroundImage: `url(${image})`};
    return (
        <div className="site-cover" style={styles}>
            <div className="site-cover__inner">
                <h1>{title}</h1>
            </div>
        </div>
    );
};

export default SiteCover;