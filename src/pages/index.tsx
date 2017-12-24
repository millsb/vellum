import BleedArea from "../vellum/structure/BleedArea";
import Container from "../vellum/structure/Container";
import {Grid, GridArea} from "../vellum/structure/grids";
import {HorzNav, NavItems} from "../vellum/navigation";
import Link from "gatsby-link";
import * as React from "react";
import {StatelessComponent} from "react";

const navItems: NavItems = [
    {href: "#", label: "Values"},
    {href: "#", label: "Design"},
    {href: "#", label: "Develop"},
    {href: "#", label: "Publish"},
];

const IndexPage: StatelessComponent<any> = () => (
    <BleedArea>
        <Container>
            <Grid name="interior">
                <GridArea area={"header"}>
                    <h1>Vellum</h1>
                </GridArea>
                <GridArea area={"navigation"}>
                    <HorzNav items={navItems}/>
                </GridArea>
                <GridArea area={"content"}>
                    <div>
                        <p>Welcome to your new Gatsby site.</p>
                    </div>
                    <div>
                        <p>Now go build something great.</p>
                        <Link to="/page-2/">Go to page 2</Link>
                    </div>
                </GridArea>
            </Grid>
        </Container>
    </BleedArea>
);

export default IndexPage;
