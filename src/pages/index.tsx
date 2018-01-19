import * as React from "react";
import {StatelessComponent} from "react";
import SiteCover from "../library/SiteCover/SiteCover";
import {path} from "ramda";
import GridItem from "../library/Grid/GridItem";

export interface IndexPageProps {
    data: {
        heroImage?: any;
        pageNav?: any;
    };
}

const IndexPage: StatelessComponent<IndexPageProps> = ({data}) => {
    const image = path<string>(["coverImage", "sizes", "src"], data);
    return (
        <React.Fragment>
            <SiteCover image={image} title={"Design and Build Responsibly."} />
        </React.Fragment>
    );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
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
