import React, { Component } from "react";

export default class Button extends Component {
    handleButtonClick = () => {
        this.props.click(this.props.value);
    };

    render() {
        const classCss =
            !this.props.value ? "btn red darken-3" : "btn green darken-3";
        const spanText = !this.props.value ? "-" : "+";

        return (
            <button onClick={this.handleButtonClick} className={classCss}>
                {spanText}
            </button>
        );
    }
}
