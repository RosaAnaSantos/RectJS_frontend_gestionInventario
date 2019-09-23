import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    
    return <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav navbar>
        <NavItem className="navItemInicio">
            <Link to="/admins">Administradores</Link>
          </NavItem>
          <NavItem className="navItem">
            <Link to="/users">Usuarios</Link>
          </NavItem>
          <NavItem className="navItem">
            <Link to="/productos">Productos</Link>
          </NavItem>
          <NavItem className="navItem">
            <Link to="/tipos">Tipos</Link>
          </NavItem>
          <NavItem className="navItem">
            <Link to="/stocks">Stocks</Link>
          </NavItem>
          <NavItem className="navItem">
            <Link to="/ubicaciones">Ubicaciones</Link>
          </NavItem>
          <NavItem className="navItem">
            <Link to="/categorias">Categorías</Link>
          </NavItem>
          <NavItem className="navItem">
            <Link to="/bitacoras">Bitácoras</Link>
          </NavItem>

        </Nav>
      </Collapse>
    </Navbar>;

/*
return <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1
        <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">Page 1-1</a></li>
          <li><a href="#">Page 1-2</a></li>
          <li><a href="#">Page 1-3</a></li>
        </ul>
      </li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
  </nav>
  */
  }
  
}
