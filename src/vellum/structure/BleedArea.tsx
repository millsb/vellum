import * as React from "react";
import {StatelessComponent} from "react";

export interface Props {
    children?: React.ReactNode;
    color?: string;
}

const BleedArea: StatelessComponent<Props> = ({children, color}) => (
        <div className="bleed-area" style={{backgroundColor: color}}>
            {children}
        </div>
);

export default BleedArea;
