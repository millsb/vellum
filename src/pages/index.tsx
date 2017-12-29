import {GridItem} from "../library/Grid";
import * as React from "react";
import {StatelessComponent} from "react";
import {Hero} from "../library/Hero/Hero";

export interface IndexPageProps {
    data: {
        heroImage?: any;
    };
}

const IndexPage: StatelessComponent<IndexPageProps> = ({data}) => {
    return (
        <GridItem column={"bleed"}>
            <Hero image={data.heroImage.sizes}/>
        </GridItem>
    );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    heroImage: imageSharp(id: { regex: "/purple-neon.jpg/" }) {
      sizes(
        maxWidth: 1440
        maxHeight: 400
        cropFocus: CENTER
        toFormat: PNG
        duotone: {
           highlight: "#f00e2e",
           shadow: "#663399",
           opacity: 65 
        }
      ) {
        ... GatsbyImageSharpSizes_tracedSVG
      }
    }
  } 
`;
