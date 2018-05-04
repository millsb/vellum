import * as React from "react";
import Helmet from "react-helmet";

import "./_base.scss";
import {path, map} from "ramda";
import GlobalHeader from "../vellum/GlobalHeader/GlobalHeader";

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
            <div className="grid">
                <div className="grid__col">
                    <GlobalHeader siteTitle="Vellum" navItems={navItems} />
                </div>
            </div>
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

