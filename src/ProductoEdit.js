import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class ProductoEdit extends Component {

  emptyItem = {
    id: '',
    nombre: '',
    marca: '',
    modelo: '',
    descripcion:''
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyItem,
      new: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  async componentDidMount() {
    if (this.props.match.params.id !== 'new') {
      const producto = await (await fetch(`http://localhost:8080/rest/producto/${this.props.match.params.id}`)).json();
      this.setState({ item: producto });
    } else {
      this.setState({ new: true })
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = { ...this.state.item };
    item[name] = value;
    this.setState({ item });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { item } = this.state;

    await fetch(`http://localhost:8080/rest/producto${this.state.new ? '' : '/' + item.id}`, {
      method: (this.state.new) ? 'POST' : 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push('/productos');
  }

  render() {
    const { item } = this.state;
    const title = <h2>{item.id ? 'Edit Producto' : 'Add Producto'}</h2>;

    return <div>
      <AppNavbar />
      <Container>
        {title}
        <Form onSubmit={this.handleSubmit}>
    
          <FormGroup>
            <Label for="nombre">Nombre</Label>
            <Input type="text" name="nombre" id="nombre" value={item.nombre || ''}
              onChange={this.handleChange} autoComplete="nombre" />
          </FormGroup>
          <FormGroup>
            <Label for="marca">Marca</Label>
            <Input type="text" name="marca" id="marca" value={item.marca || ''}
              onChange={this.handleChange} autoComplete="marca" />
          </FormGroup>
          <FormGroup>
            <Label for="modelo">Modelo</Label>
            <Input type="text" name="modelo" id="modelo" value={item.modelo || ''}
              onChange={this.handleChange} autoComplete="modelo" />
          </FormGroup>
          <FormGroup>
            <Label for="descripcion">Descripción</Label>
            <Input type="text" name="descripcion" id="descripcion" value={item.descripcion || ''}
              onChange={this.handleChange} autoComplete="modelo" />
          </FormGroup>
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/productos">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  }
}

export default withRouter(ProductoEdit);
