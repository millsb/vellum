import React from "react";
import PropTypes from "prop-types";
import {find, propEq, assoc} from "ramda";

import "./seashell-props.scss";

export default class SeashellProps extends React.Component {
    static propTypes = {
        component: PropTypes.node.isRequired,
        props: PropTypes.arrayOf(PropTypes.object).isRequired,
        onPropChange: PropTypes.function
    };

    constructor(props) {
        super(props);
        this.state = props.props;
    };

    propEditorForString(propName, value) {
        return (
            <input type="text"
                   defaultValue={value}
                   onChange={ event => this.handlePropChange(propName, event) }/>
        )
    };

    propCurrentValue(propName) {
        return this.props.component.props[propName];
    }

    propEditor(propName, value) {
        const propDef = find(propEq("name", propName), this.props.props);
        if (propDef && propDef.type.name === "string") {
            return this.propEditorForString(propName, value);
        }
    };

    handlePropChange(propName, event) {
        const newVal = event.target.value;
        const newProps = assoc(propName, newVal, this.props.component.props);
        this.props.onPropChange(newProps);
    };

    render() {
        console.log(this.props.component);
        console.log(this.props.props);
        return (
            <section className="seashell-props">
                <div className="seashell-props__headings">
                    <span>Property</span>
                    <span>Description</span>
                    <span>Type</span>
                    <span>Required?</span>
                    <span>&nbsp;</span>
                </div>
                {this.props.props.map( (prop, i) => {
                    return (
                        <div className="seashell-props__row" key={i}>
                            <span>{prop.name}</span>
                            <span>{prop.docblock}</span>
                            <span>{prop.type.name}</span>
                            <span>{prop.required ? "yes" : ""}</span>
                            <span>{this.propEditor(prop.name, this.propCurrentValue(prop.name))}</span>
                        </div>
                    );
                })}
            </section>
        )
    }
}