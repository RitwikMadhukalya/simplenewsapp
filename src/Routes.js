// import NewsList from "./components/NewsList";
import Business from "./pages/business/Business";
import General from "./pages/general/General";
import Entertainment from "./pages/entertainment/Entertainment";
import Health from "./pages/health/Health";
import Science from "./pages/science/Science";
import Sports from "./pages/sports/Sports";
import Technology from "./pages/technology/Technology";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import MenuBar from "./layouts/MenuBar";
import TopNav from "./layouts/TopNav";
import AppFooter from "./layouts/AppFooter";
import "./Routes.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <TopNav />
        <MenuBar />
        <Switch>
          <Route exact path="/" component={General}></Route>
          <Route exact path="/general" component={General}></Route>
          <Route exact path="/business" component={Business}></Route>
          <Route exact path="/health" component={Health}></Route>
          <Route exact path="/science" component={Science}></Route>
          <Route exact path="/entertainment" component={Entertainment}></Route>
          <Route exact path="/sports" component={Sports}></Route>
          <Route exact path="/technology" component={Technology}></Route>
        </Switch>
        <AppFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
