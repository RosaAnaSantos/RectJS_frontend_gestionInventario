import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class ProductoList extends Component {

  constructor(props) {
    super(props);
    this.state = {productos: [], isLoading: true};
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('http://localhost:8080/rest/producto')
      .then(response => response.json())
      .then(data => this.setState({productos: data, isLoading: false}));
  }

  async remove(id) {
    await fetch(`http://localhost:8080/rest/producto/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedProductos = [...this.state.productos].filter(i => i.id !== id);
      this.setState({productos: updatedProductos});
    });
  }

  render() {
    const {productos, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const productoList = productos.map(producto => {
      return <tr key={producto.id}>
        <td>{producto.id}</td>
        <td>{producto.nombre}</td>
        <td>{producto.marca}</td>
        <td>{producto.modelo}</td>
        <td>{producto.descripcion}</td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/productos/" + producto.id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(producto.id)}>Delete</Button>
            <Button size="sm" color="secondary" tag={Link} to={"/stocks/"+producto.id}>Stocks</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="/productos/new">Añadir producto</Button>
          </div>
          <h3>Lista de productos</h3>
          <Table className="mt-4">
            <thead>
            <tr>
              <th width="10%">Id</th>
              <th width="15%">nombre</th>
              <th width="15%">Marca</th>
              <th width="15%">Modelo</th>
              <th width="25%">Descripción</th>
            </tr>
            </thead>
            <tbody>
            {productoList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default ProductoList;