import React from "react";
import Link from "gatsby-link";
import BleedArea from "../vellum/layout/BleedArea";
import Container from "../vellum/layout/Container";

const IndexPage = () => (
    <BleedArea color="lime">
        <Container>
            <div>
                <h1>Vellum</h1>
                <p>Welcome to your new Gatsby site.</p>
                <p>Now go build something great.</p>
                <Link to="/page-2/">Go to page 2</Link>
            </div>
        </Container>
    </BleedArea>
);

export default IndexPage;
