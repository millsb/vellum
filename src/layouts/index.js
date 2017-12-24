import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "./_base.scss";

const TemplateWrapper = ({children}) => (
    <div>
        <Helmet
            title="Gatsby Default Starter"
            meta={[
                {name: "description", content: "Sample"},
                {name: "keywords", content: "sample, something"}
            ]}>

            <link href="https://fonts.googleapis.com/css?family=Fira+Sans|Roboto+Condensed:700" rel="stylesheet"></link>
        </Helmet>

        
        {children()}
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;
