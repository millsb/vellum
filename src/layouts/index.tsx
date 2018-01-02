import * as React from "react";
import {StatelessComponent} from "react";
import Helmet from "react-helmet";
import GlobalHeader from "../library/GlobalHeader/GlobalHeader";

import "./_base.scss";
import {MainNavYamlConnection} from "../graphql-types";
import {NavItems} from "../library/HorzNav/HorzNav";
import {Grid} from "../library/Grid";

interface TemplateWrapperProps {
    data: {
        allMainNavYaml: MainNavYamlConnection
    };
    children: any;
}
const TemplateWrapper: StatelessComponent<TemplateWrapperProps> = ({data, children}) => {
    const navItems: NavItems = data.allMainNavYaml.edges.map( (edge) => edge.node);

    return (
        <div className="wrapper">
            <Grid name={"standard"}>
                <Helmet
                    title="Gatsby Default Starter"
                    meta={[
                        {name: "description", content: "Sample"},
                        {name: "keywords", content: "sample, something"},
                    ]}>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600|Patua+One|Roboto+Condensed:400,700" rel="stylesheet"/>
                </Helmet>
                <Grid.Item area={"header"}>
                    <GlobalHeader siteTitle="Vellum" navItems={navItems} />
                </Grid.Item>
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

