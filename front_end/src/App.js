import './App.css';
import CartPage from './Pages/CartPage';
import Admin from './Pages/Admin';
import AllClothing from './Pages/NewArrivals';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Product from './Pages/Product';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mens from './Pages/Mens';
import CheckOut from './Pages/CheckOut';
import Women from './Pages/Womens';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/admin'>
            <Admin />
          </Route>
          <Route path="/Home">
            <HomePage />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/NewArrivals">
            <AllClothing />
          </Route>
          <Route path="/Cart">
            <CartPage />
          </Route>
          <Route path="/mens">
            <Mens />
          </Route>
          <Route path="/womens">
            <Women />
          </Route>
          <Route path="/checkout">
            <CheckOut />
          </Route>
        </Switch>
        {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;
