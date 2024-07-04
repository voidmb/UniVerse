import React, { Component } from 'react';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      email: '',
      mensaje: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor
    console.log(this.state);
    // También podrías reiniciar los campos del formulario después de enviarlos
    this.setState({
      nombre: '',
      email: '',
      mensaje: ''
    });
  }

  render() {
    return (
      <div>
        <h2>Formulario de Contacto</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" value={this.state.nombre} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" value={this.state.mensaje} onChange={this.handleChange}></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default InputForm;