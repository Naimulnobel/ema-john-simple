import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Header from './component/header/Header';
import Invetory from "./component/Inventory/Invetory";
import NoMatch from "./component/NoMatch/NoMatch";
import ProductDetail from "./component/ProductDetail/ProductDetail";
import Review from "./component/Review/Review";
import Shop from './component/Shop/Shop';
function App() {
  return (
    <div>
    <Header/>
    <Router>
      <Switch>
        <Route path="/shop">
          <Shop/>
        </Route>
        <Route path="/review">
          <Review/>
        </Route>
        <Route path="/inventory">
          <Invetory/>
        </Route>
        <Route exact path="/">
          <Shop/>
        </Route>
        <Route path="/product/:productKey">
          <ProductDetail/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
