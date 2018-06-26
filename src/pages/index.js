import * as React from "react";
import Inkwell from "../vellum/Inkwell/Inkwell";
import EventCard from "../components/EventCard/EventCard";
import {Route} from "react-router";
import Layout from "../components/layout";

const IndexPage = ({data}) => {

    return (
      <Layout>
        <section className="grid">
            <div className="grid__col">
                <h1>Homepage</h1>
            </div>
        </section>
      </Layout>
    );
};

export default IndexPage;

