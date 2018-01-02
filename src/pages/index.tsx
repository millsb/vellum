import {Grid} from "../library/Grid";
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
        <React.Fragment>
            <Grid.Item column={"bleed"} row={"header"}>
                <Hero image={data.heroImage.sizes}/>
            </Grid.Item>
            <Grid.Item column={"bleed"} row={"main"}>
                <div style={{backgroundColor: "rebeccaPurple"}}>
                    <Grid subgrid>
                        <Grid.Item area={"main"}>
                            <h1>Foo</h1>
                        </Grid.Item>
                    </Grid>
                </div>
            </Grid.Item>
        </React.Fragment>
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
