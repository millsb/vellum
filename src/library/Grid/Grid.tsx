import "./grid.scss";
import * as classnames from "classnames";
import * as React from "react";
import {StatelessComponent} from "react";
import GridItem from "./GridItem";

export interface GridProps {
    name?: string;
    subgrid?: boolean;
}

export interface GridComponent extends StatelessComponent<GridProps> {
    Item?: typeof GridItem;
}

export const Grid: GridComponent = ({children, name, subgrid }) => {
    const gridName = subgrid ? "subgrid" : name;
    const gridClass = classnames("grid", `grid--${gridName}`);
    return (
        <div className={gridClass}>
            {children}
        </div>
    );
};

Grid.Item = GridItem;
