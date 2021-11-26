import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Product from './pages/Product';
import Admin from './pages/Admin';
import Sales from './pages/AdminSales';
import AdminProducts from './pages/AdminProducts';

import Checkout from './pages/Checkout';
import AddAddress from './pages/AddAddress';
import AddProduct from './pages/AddProduct';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/add/product">
          <AddProduct />
        </Route>
        <Route exact path="/add/address">
          <AddAddress />
        </Route>
        <Route path="/teste">
          <Checkout />
        </Route>
        <Route path="/admin">
          <Admin/>
        </Route>
        <Route path="/admin-products">
          <AdminProducts/>
        </Route>
        <Route path="/admin-sales">
          <Sales/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Cadastro />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
