import * as React from "react";
import {path} from "ramda";
import Seashell from "../vellum/Seashell/Seashell";
import GlobalHeader from "../library/GlobalHeader/GlobalHeader";
import {Route} from "react-router";

const IndexPage = ({data}) => {
    const image = path(["coverImage", "sizes", "src"], data);
    const component = data.component;
    console.log(component);

    return (
        <section style={{width: "840px", margin: "0 auto"}}>
            <Seashell meta={component}>
                <GlobalHeader siteTitle={"My Website"} navItems={[]}/>
            </Seashell>
        </section>
    );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
   component: componentMetadata(id: {regex: "/GlobalHeader/"} ) {
     id
     docblock
     children {
       id
     }
     props {
       id
       type {
        name
      }
     docblock
     required
     name
    }

  }
    pageNav: pageNavYaml(id: {regex:"/page-nav.yaml/"}) {
      content {
        label
        href
        icon
      }
    }
    coverImage: imageSharp(id: { regex: "/mac-wall.jpg/" }) {
      sizes(
        maxWidth: 1440
        maxHeight: 600
        cropFocus: SOUTHEAST
        toFormat: PNG
      ) {
        ... GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;
