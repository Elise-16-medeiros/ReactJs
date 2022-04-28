import './Contador.css';
import React, { Component } from 'react';

class Contador extends Component {

state = {
    numero: this.props.numInicial || 0,
    passo: this.props.passoInicial || 5,
};

inc = () => {
    this.setState({ 
        numero: this.state.numero + this.state.passo, 
    });
}

dec = () => {
    this.setState({ 
        numero: this.state.numero - this.state.passo, 
    });
}

setPasso = (event) => {
    this.setState({ 
        passo: +event.target.value,
    })
}

    render() {
        return (
            <div className="contador">
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <label htmlfor="passoInput"><strong>Passo:</strong></label>
                <input id="passoInput" type="number" value={this.state.passo} onChange={this.setPasso}></input>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        );
    }
}

export default Contador;