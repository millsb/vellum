import * as React from "react";
import Inkwell from "../vellum/Inkwell/Inkwell";
import EventCard from "../components/EventCard/EventCard";
import {Route} from "react-router";

const IndexPage = ({data}) => {

    return (
        <section className="grid">
            <div className="grid__col">
                <h1>Homepage</h1>
            </div>
        </section>
    );
};

export default IndexPage;

