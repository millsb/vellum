import "jest";
import { configure, render } from "enzyme";
import * as React from "react";
import GridItem from "./GridItem";

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

describe("GridItem", () => {
    it("should add inline styles with child", () => {
        const gridItem = render(<GridItem column={"1/3"} row={"2/2"}><div/></GridItem>);
        expect(gridItem).toMatchSnapshot();
    });

    it("should add merge existing styles with child", () => {
        const gridItem = render(<GridItem column={"1/3"} row={"2/2"}><div style={{color: "blue"}}/></GridItem>);
        expect(gridItem).toMatchSnapshot();
    });

    it("should assign fake subgrid styles when subgrid is selected", () => {
        const gridItem = render(<GridItem subgrid={true}><div/></GridItem>);
        expect(gridItem).toMatchSnapshot();
    });
});
