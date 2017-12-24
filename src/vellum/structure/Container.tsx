import * as React from "react";
import "./container.scss";
import {StatelessComponent} from "react";

export interface Props {
    children?: React.ReactNode
}

const Container: StatelessComponent<Props> = ({children}) => (
  <section className="container">
      {children}
  </section>
);

export default Container;
