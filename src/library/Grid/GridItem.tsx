import * as React from "react";
import * as classnames from "classnames";
import "./grid.scss";
import {StatelessComponent} from "react";

export interface GridItemProps {
    children?: React.ReactNode;
    column: string;
    row?: string;
}

export const GridItem: StatelessComponent<GridItemProps> = ({children, column, row}) => {
    return (
        <div className={classnames("grid__item")} style={{gridColumn: column, gridRow: row}}>
            {children}
        </div>
    );
};
