import PropTypes from "prop-types";
import React, { Component } from "react";
import style from "./Accordeon.module.css";

export default class Accordion extends Component {
  static propTypes = {
    headerClass: PropTypes.string,
    contentWrapperClass: PropTypes.string,
    isOpen: PropTypes.bool,
    onToggle: PropTypes.func,
    headerChildren: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      open: !!props.isOpen,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isOpen !== nextProps.isOpen) {
      this.toggle();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.open !== this.state.open && this.props.onToggle) {
      this.props.onToggle(this.state.open);
    }
  }

  toggle = () => {
    this.setState((prevState) => {
      return {
        open: !prevState.open,
      };
    });
  };

  render() {
    return (
      <div className={[style.Accordion, this.props.className || ""].join(" ")}>
        <div
          onClick={this.toggle}
          className={[
            style.Accordion__header,
            !this.state.open ? style["Accordion__header--collapsed"] : "",
            this.props.headerClass || "",
          ].join(" ")}
        >
          {this.props.title}
          {this.props.headerChildren
            ? this.props.headerChildren(this.state.open)
            : null}
        </div>
        <div
          className={
            this.state.open
              ? this.props.contentWrapperClass
                ? style.Accordion__body + this.props.contentWrapperClass
                : style.Accordion__body
              : `${style.Accordion__body}${style["Accordion__body--collapsed"]}`
          }
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
