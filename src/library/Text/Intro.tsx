import * as React from "react";
import {StatelessComponent} from "react";
import "./intro.scss";

export interface IntroProps {
    text: string;
}

const Intro: StatelessComponent<IntroProps> = ({text}) => {
    return (
        <p className="intro">{text}</p>
    );
};

export default Intro;