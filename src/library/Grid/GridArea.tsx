import * as React from "react";
import * as classnames from "classnames";
import "./grid.scss";
import {StatelessComponent} from "react";

export interface GridAreaProps {
    children?: React.ReactNode;
    area: string;
}

export const GridArea: StatelessComponent<GridAreaProps> = ({children, area}) => {
    return (
        <div className={classnames("grid__area", area)} style={{gridArea: area}}>
            {children}
        </div>
    );
};
