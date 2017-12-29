import * as React from "react";
import {MarkdownRemark} from "../../graphql-types";
import {StatelessComponent} from "react";
import {Grid} from "../../library/Grid";

interface InteriorPageProps {
    content: MarkdownRemark;
}

export const InteriorPage: StatelessComponent<InteriorPageProps> = ({content}) => {
    return (
        <Grid name={"interior"}>
        </Grid>
    );
};
