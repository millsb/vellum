import * as React from "react";
import Inkwell from "../vellum/Inkwell/Inkwell";
import EventCard from "../components/EventCard/EventCard";
import {Route} from "react-router";

const IndexPage = ({data}) => {
    console.log(data);
    const component = data.component;

    return (
        <section style={{width: "840px", margin: "0 auto"}}>
            <Inkwell meta={component}>
                <EventCard title="Vellum Hackathon"
                           date="February 1, 2018"
                           location="Philadelphia, PA"
                           startTime="10:00 AM"
                           endTime="6:00 PM"
                           image="https://picsum.photos/320/180">
                    Join us, and other local developers to learn all about using
                    Vellum to build your next web site. This is a hands-on seminar,
                    so bring your own laptop!
                </EventCard>
            </Inkwell>
        </section>
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
