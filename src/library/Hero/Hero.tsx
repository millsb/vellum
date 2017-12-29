import * as React from "react";
import {StatelessComponent} from "react";
import "./hero.scss";

interface HeroProps {
    image: {
        sizes: any
    };
}

export const Hero: StatelessComponent<HeroProps> = ({image}) => {
    return (
        <section className="hero" style={{backgroundImage: `url(${image.src})`, height: 400}}>
            <div className="hero__interior">
                <h1>With Great Design, <br/>
                Comes Great Reponsibility.</h1>
                <h2>Build, maintain and document a living design system for the web.</h2>
            </div>
        </section>
    );
};
