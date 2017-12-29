import * as React from "react";
import {InteriorPage} from "../templates/InteriorPage/InteriorPage";
import {MarkdownRemarkConnection} from "../graphql-types";
import {StatelessComponent} from "react";

export interface IntroPageProps {
    data: {
        allMarkdownRemark: MarkdownRemarkConnection;
    };
}

export const IntroPage: StatelessComponent<IntroPageProps> = ({data}) => {
    return (
        <InteriorPage content={data.allMarkdownRemark.edges[0].node}/>
    );
};

export default IntroPage;

export const query = graphql`
    query allMarkdownRemark {
        allMarkdownRemark(
            limit: 1,
            filter: {
                fileAbsolutePath: { glob: "**/**/pages/introduction.md" }
            }
        ) {
            edges {
                node {
                    html
                }
            }
        }
    }
`;