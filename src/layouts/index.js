import * as React from "react";
import Helmet from "react-helmet";

import "./_base.scss";
import {path, map} from "ramda";
import GlobalHeader from "../library/GlobalHeader/GlobalHeader";

const TemplateWrapper = ({data, children}) => {
    const edges = path(["allMainNavYaml", "edges"], data);
    const navItems = map((edge) => edge.node, edges);

    return (
        <div className="wrapper">
            <Helmet
                title="Gatsby Default Starter"
                meta={[
                    {name: "description", content: "Sample"},
                    {name: "keywords", content: "sample, something"},
                ]}>
                <link href="https://fonts.googleapis.com/css?family=Material+Icons|Open+Sans:300,400,600|Merriweather:300,400,600|Source+Code+Pro:400"
                      rel="stylesheet"/>
            </Helmet>
            <GlobalHeader siteTitle="Vellum" navItems={navItems} />
            {children()}
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

