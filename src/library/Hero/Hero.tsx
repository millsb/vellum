import * as React from "react";
import {StatelessComponent} from "react";
import {merge} from "ramda";
import "./hero.scss";

interface HeroProps {
    style?: Object;
    image: {
        src: string;
        sizes: any;
    };
}

export const Hero: StatelessComponent<HeroProps> = ({image, style}) => {
    return (
        <section className="hero" style={merge(style, {backgroundImage: `url(${image.src})`, height: 400})}>
            <div className="hero__interior">
                <h1>With Great Design, <br/>
                Comes Great Reponsibility.</h1>
                <h2>Build, maintain and document a living design system for the web.</h2>
            </div>
        </section>
    );
};
