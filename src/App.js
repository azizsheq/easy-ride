import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from "./components/NoMatch/NoMatch";
import Navigation from "./components/Navigation/Navigation";
import CardDetails from "./components/CardDetails/CardDetails";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/leagueDetails/:id">
          <CardDetails/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
