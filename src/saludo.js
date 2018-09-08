import React from "react";

export default class Saludo extends React.Component {
  render() {
    return <h1>Hola {this.props.nombre}!</h1>;
  }
}
