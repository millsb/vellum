import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import InkwellProps from "./InkwellProps";
import InkwellCode from "./InkwellCode";
import InkwellCanvas from "./InkwellCanvas";

import "./inkwell.scss";

export default class Inkwell extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.meta);
        this.frameRef = React.createRef();
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

    componentDidMount() {
      return ReactDOM.createPortal
    }

    render() {
        return (
            <section className="inkwell">
              <InkwellCanvas>
                {this.state.nodeToRender}
              </InkwellCanvas>
                <InkwellCode
                    componentName={this.props.meta.displayName}
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

