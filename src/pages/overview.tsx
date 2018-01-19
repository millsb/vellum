import * as React from "react";
import {StatelessComponent} from "react";
import GridItem from "../library/Grid/GridItem";
import {Hero} from "../library/Hero/Hero";
import {MarkdownRemark} from "../graphql-types";
import {path} from "ramda";
import Intro from "../library/Text/Intro";

export interface IntroPageProps {
    data: {
        post: MarkdownRemark;
    };
}

export const IntroPage: StatelessComponent<IntroPageProps> = ({data}) => {
    const title = path<string>(["post", "frontmatter", "title"], data);
    const summary = path<string>(["post", "frontmatter", "summary"], data);
    const body = path<string>(["post", "html"], data);

    return (
        <React.Fragment>
            <GridItem column={"2 / 5"}>
                <Hero title={title}></Hero>
            </GridItem>
            <GridItem column={"2 / 4"}>
                <div>
                    {summary && <Intro text={summary}></Intro>}
                </div>
            </GridItem>
            <GridItem column={"3 / 5"}>
                <div className="rich-content">
                    {body && <div dangerouslySetInnerHTML={{__html: body}}/>}
                </div>
            </GridItem>
        </React.Fragment>
    );
};

export default IntroPage;

export const query = graphql`
    query IndexPage {
        post: markdownRemark(
            id: { regex: "/pages\/overview.md/" }
        ) {
            html
            frontmatter {
                title
                summary
            }
        }
    }
`;
