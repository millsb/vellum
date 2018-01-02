import * as React from "react";
import {reject, isNil, merge} from "ramda";
import {ReactChild, ReactElement, StatelessComponent} from "react";

export interface GridItemStyles {
    gridColumn?: string;
    gridRow?: string;
    gridArea?: string;
}

export interface GridItemProps {
    column?: string;
    row?: string;
    area?: string;
}

export const GridItem: StatelessComponent<GridItemProps> = ({children, row, column, area }) => {
    const gridStyles: GridItemStyles = reject(isNil, {
        gridArea: area,
        gridColumn: column,
        gridRow: row,
    });

    const renderChildren: any = () => {
        return React.Children.map(children, (child: ReactChild) => {
            if (typeof child !== "string") {
                const elChild = child as ReactElement<any>;
                const newStyles = merge(elChild.props.style, gridStyles);
                return React.cloneElement(elChild, { style: newStyles});
            } else {
                return child;
            }
        });
    };

    return (
        <React.Fragment>
            {renderChildren()}
        </React.Fragment>
    );
};

export default GridItem;
