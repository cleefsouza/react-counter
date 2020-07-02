import React, { Component } from "react";
import Button from "../Button/Button";
import css from "./counter.module.css";

export default class Counter extends Component {
    constructor() {
        super();

        this.state = {
            contadorAtual: 0,
            cliques: 0,
        };
    }

    handleButtonClick = (tipoClick) => {
        const { contadorAtual, cliques } = this.state;

        this.setState({
            contadorAtual: tipoClick ? contadorAtual + 1 : contadorAtual - 1,
            cliques: cliques + 1,
        });
    };

    render() {
        const { contadorAtual, cliques } = this.state;

        return (
            <div className={css.counterContainer}>
                <Button click={this.handleButtonClick} tipo={false}></Button>
                <span className={css.counterValue}>{contadorAtual}</span>
                <Button click={this.handleButtonClick} tipo={true}></Button>
                <p className={css.counterValue}>Cliques: {cliques}</p>
            </div>
        );
    }
}
