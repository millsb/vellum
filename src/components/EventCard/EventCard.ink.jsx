import React from "react";
import Inkwell from "../../vellum/Inkwell/Inkwell";
import EventCard from "./EventCard";
import "../../vellum/queries";

const EventCardInk = ({data}) => {
    console.log(data);
    const {componentMetadata, docs} = data;
    return (<section style={{width: "840px", margin: "0 auto"}}>
        <Inkwell meta={componentMetadata}>
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
        <div dangerouslySetInnerHTML={{__html: docs.html}}/>
    </section>);
};
export default EventCardInk;

export const query = graphql`
query InkQuery {
    componentMetadata(id: { regex: "/EventCard.jsx/" }) {
        ...standardInkFields
    }
    docs: markdownRemark(id: { regex: "/EventCard/" }) {
       html
    }
}
`;
