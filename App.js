import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Items from './pages/ItemsPage';
import Cart from './pages/CartPage';
import Navheader from './pages/NavHeader';

function App() {

  return (
    <>
      <Navheader></Navheader>
      <Switch>
        <Route path="/" exact>
          <Items />
        </Route>

        <Route path="/CartPage" exact>
          <Cart />
        </Route>

      </Switch>

    </>


  );
}

export default App;
