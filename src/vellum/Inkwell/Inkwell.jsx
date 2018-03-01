import React from "react";
import PropTypes from "prop-types";
import InkwellProps from "./InkwellProps";
import InkwellCode from "./InkwellCode";

import "./inkwell.scss";

// define global React so it will work with eval();
window.React = React;

export default class Inkwell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nodeToRender: props.children,
            propsToRender: props.meta.props
        }
    }

    static propTypes = {
        meta: PropTypes.object,
    };

    onNewProps = (props) => {
        const newNode = React.cloneElement(this.state.nodeToRender, props);
        this.setState({
            propsToRender: props,
            nodeToRender: newNode
        });
    };

    render() {
        return (
            <section className="inkwell">
                <div style={{display: "flex", justifyContent: "center", margin: "30px 0"}}>
                    {this.state.nodeToRender}
                </div>
                <InkwellCode
                    component={this.state.nodeToRender} />
                <p>{this.props.meta.docblock}</p>
                <InkwellProps
                    component={this.state.nodeToRender}
                    props={this.props.meta.props}
                    onPropChange={this.onNewProps} />
            </section>
        )
    }
}
