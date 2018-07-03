import React from "react";
import ReactDOM from "react-dom";

export default class InkwellCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.frame = React.createRef();
    this.frameBody = null;
  }

  componentDidMount() {
    if (this.frame.current) {
      this.frameBody = this.frame.current.contentDocument.body;
    }

    this.forceUpdate();
  }

  render() {
    return (
      <iframe width="100%" border="0" ref={this.frame}>
        {this.frameBody &&
          ReactDOM.createPortal(this.props.children, this.frameBody)}
      </iframe>
    );
  }
}
