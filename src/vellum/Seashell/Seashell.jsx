import React from "react";
import PropTypes from "prop-types";
import SeashellProps from "./SeashellProps";
import SeashellCode from "./SeashellCode";

import "./seashell.scss";

export default class Seashell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nodeToRender: props.children,
            propsToRender: props.meta.props
        }
    }

    static propTypes = {
        meta: PropTypes.object,
        childProps: PropTypes.object
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
            <section className="seashell">
                {this.state.nodeToRender}
                <SeashellCode component={this.state.nodeToRender} />
                <SeashellProps
                    component={this.state.nodeToRender}
                    props={this.props.meta.props}
                    onPropChange={this.onNewProps}/>
            </section>
        )
    }
}

