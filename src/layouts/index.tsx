import * as React from "react";
import {StatelessComponent} from "react";
import Helmet from "react-helmet";

import "./_base.scss";
import {MainNavYamlConnection} from "../graphql-types";
import {Grid} from "../library/Grid";
import {path, map} from "ramda";
import GridItem from "../library/Grid/GridItem";
import {NavItem} from "../interfaces/Navigation";
import GlobalHeader from "../library/GlobalHeader/GlobalHeader";

interface TemplateWrapperProps {
    data?: {
        allMainNavYaml: MainNavYamlConnection
    };
    children: any;
}
const TemplateWrapper: StatelessComponent<TemplateWrapperProps> = ({data, children}) => {
    const edges = path(["allMainNavYaml", "edges"], data);
    const navItems: NavItem[] = map((edge) => edge.node, edges);

    return (
        <div className="wrapper">
            <Grid name={"standard"}>
                <Helmet
                    title="Gatsby Default Starter"
                    meta={[
                        {name: "description", content: "Sample"},
                        {name: "keywords", content: "sample, something"},
                    ]}>
                    <link href="https://fonts.googleapis.com/css?family=Material+Icons|Open+Sans:300,400,600|Merriweather:300,400,600"
                          rel="stylesheet"/>
                </Helmet>
                <GridItem area={"header"}>
                    <GlobalHeader siteTitle="Vellum" navItems={navItems} />
                </GridItem>
                {children()}
            </Grid>
        </div>
    );
};

export default TemplateWrapper;

export const query = graphql`
    query allMainNavYaml {
        allMainNavYaml {
            edges {
                node {
                    label
                    href
                }
            }
        }
    }
`;

