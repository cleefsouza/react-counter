import React, { Component } from "react";

export default class Button extends Component {
    handleButtonClick = () => {
        this.props.click(this.props.tipo);
    };

    render() {
        const classCss =
            !this.props.tipo ? "btn red darken-3" : "btn green darken-3";
        const spanText = !this.props.tipo ? "-" : "+";

        return (
            <button onClick={this.handleButtonClick} className={classCss}>
                {spanText}
            </button>
        );
    }
}
