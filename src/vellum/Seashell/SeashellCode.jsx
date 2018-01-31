import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import {renderToStaticMarkup} from "react-dom/server";

import {UnControlled as CodeMirror} from "react-codemirror2";
import  {html as htmlBeautify} from "js-beautify";
import toJsxString from "react-element-to-jsx-string";

import "codemirror/mode/xml/xml";
import "codemirror/mode/jsx/jsx";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import "./seashell-code.scss";

export default class SeashellCode extends React.Component {
    static props = {
        component: PropTypes.node
    };

    constructor(props) {
        super(props);
        this.state = {
            codeFormat: "xml"
        }
    }

    onFormatChange(event) {
        this.setState({ codeFormat: event.target.value});
    }

    render() {
        const htmlFormatOptions = {
            "indent_size": 2,
            "unformatted": "span"
        };

        const format = this.state.codeFormat;
        const asHtml = htmlBeautify(renderToStaticMarkup(this.props.component), htmlFormatOptions);
        const asJsx = toJsxString(this.props.component);
        const code = format === "jsx" ? asJsx : asHtml;

        return (
            <section className="seashell-code">
                <aside className="seashell-code__controls">
                    <label className={classnames({"is-active": format === "xml"})}>
                        HTML
                        <input type="radio" value="xml" name="seashell-format"
                               checked={format === "xml"}
                               onChange={event => this.onFormatChange(event)}>
                        </input>
                    </label>
                    <label className={classnames({"is-active": format === "jsx"})}>
                        JSX
                        <input type="radio" value="jsx" name="seashell-format"
                               checked={format === "jsx"}
                               onChange={event => this.onFormatChange(event)}>
                        </input>
                    </label>
                </aside>
                <CodeMirror
                    options={{
                        mode: format,
                        theme: "material",
                        lineNumbers: true,
                        readOnly: format === "xml"
                    }}
                    value={code}
                    onChange={ () => null }
                />
            </section>
        )
    }
}