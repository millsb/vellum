import React from "react";
import Inkwell from "../../vellum/Inkwell/Inkwell";
import BarBaz from "./BarBaz";
import "../../vellum/queries";

const BarBazInk = ({data}) => {
return (
    <section>
        <Inkwell meta={data.componentMetadata}>
            <BarBaz/>
        </Inkwell>
        <div dangerouslySetInnerHTML={{__html: docs.html}}/>
    </section>
    );
};

export default BarBaz;

export const query = graphql`
query BarBazInkQuery {
    componentMetadata(id: { regex: "/BarBaz.jsx/" }) {
        ...standardInkFields
    }
docs: markdownRemark(id: { regex: "/BarBaz/" }) {
        html
    }
}
`;
