import React from "react";
import Link from "gatsby-link";
import BleedArea from "../vellum/base/layout/BleedArea";
import Container from "../vellum/base/layout/Container";
import GridGolden from "../vellum/base/layout/grids/GridGolden";
import GridArea from "../vellum/base/layout/grids/GridArea";

const IndexPage = () => (
    <BleedArea>
        <Container>
            <GridGolden>
                <GridArea area={"a"}>
                    <h1>Vellum</h1>
                </GridArea>
                <GridArea area={"b"}>
                    <div>
                        <p>Welcome to your new Gatsby site.</p>
                    </div>
                </GridArea>
                <GridArea area={"c"}>
                    <div>
                        <p>Now go build something great.</p>
                        <Link to="/page-2/">Go to page 2</Link>
                    </div>
                </GridArea>
            </GridGolden>
        </Container>
    </BleedArea>
);

export default IndexPage;
