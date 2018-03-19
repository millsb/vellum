import React from "react";
import Inkwell from "../../vellum/Inkwell/Inkwell";
import FooBar from "./FooBar";
import "../../vellum/queries";

const FooBarInk = ({data}) => {
return (
    <section>
        <Inkwell meta={data.componentMetadata}>
            <FooBar/>
        </Inkwell>
        <div dangerouslySetInnerHTML={{__html: docs.html}}/>
    </section>
    );
};

export default FooBar;

export const query = graphql`
query FooBarInkQuery {
    componentMetadata(id: { regex: "/FooBar.jsx/" }) {
        ...standardInkFields
    }
docs: markdownRemark(id: { regex: "/FooBar/" }) {
        html
    }
}
`;
