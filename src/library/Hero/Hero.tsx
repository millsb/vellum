import * as React from "react";
import {StatelessComponent} from "react";
import {merge, cond} from "ramda";
import "./hero.scss";
import {Maybe} from "sanctuary";

interface HeroProps {
    style?: Object;
    title?: string;
    backgroundColor?: string;
    image?: {
        src: string;
        sizes: any;
    };
}

export const Hero: StatelessComponent<HeroProps> = ({ backgroundColor, image, style, title}) => {
    const styles = merge(style, { backgroundColor: backgroundColor });
    return (
        <section className="hero" style={styles}>
            <div className="hero__interior">
                <h1>{title}</h1>
            </div>
        </section>
    );
};
