import * as React from "react";
import Inkwell from "../vellum/Inkwell/Inkwell";
import EventCard from "../components/EventCard/EventCard";
import {Route} from "react-router";

const IndexPage = ({data}) => {
    console.log(data);
    const component = data.component;

    return (
    );
};

export default IndexPage;

export const componentMetadata = graphql`
fragment meta on ComponentMetadata {
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
`;

export const query = graphql`
  query IndexQuery {
    component: componentMetadata(id: {regex: "/EventCard/"} ) {
        ...meta
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
