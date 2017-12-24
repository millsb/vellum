import "./grid.scss";
import * as classnames from "classnames";
import * as React from "react";
import {StatelessComponent} from "react";

export interface GridProps {
    children?: React.ReactNode;
    name: string;
}

export const Grid: StatelessComponent<GridProps> = ({name, children}) => {
    const gridClass = classnames("grid", `grid--${name}`);
    return (
        <div className={gridClass}>
            {children}
        </div>
    );
};
