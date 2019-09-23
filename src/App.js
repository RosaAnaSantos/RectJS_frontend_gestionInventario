import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminList from './AdminList';
import AdminEdit from './AdminEdit';
import UsuarioList from './UsuarioList';
import UsuarioEdit from './UsuarioEdit';
import BitacoraList from './BitacoraList';
import ProductoEdit from  './ProductoEdit';
import ProductoList from './ProductoList';
import Login from './Login';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/admins' exact={true} component={AdminList}/>
          <Route path='/admins/:id' component={AdminEdit}/>
          <Route path='/users' exact={true} component={UsuarioList}/>
          <Route path='/users/:username' component={UsuarioEdit}/>
          <Route path='/bitacora' exact={true} component={BitacoraList}/>
          <Route path='/productos/:id' component={ProductoEdit}/>
          <Route path='/productos' exact={true} component={ProductoList}/>
          <Route path='/login'  component={Login}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
