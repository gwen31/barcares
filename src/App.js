import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./pages/Header";
import Menu from './pages/Menu';
import Appartement from "./components/Appartement";
import Barcares from "./components/Barcares";
import PortLeucate from "./components/PortLeucate";
import Galamus from "./components/Galamus";
import ForcaReal from "./components/ForcaReal";
import Perillos from "./components/Perillos";
import Salses from "./components/Salses";
import Tautavel from "./components/Tautavel";
import Collioure from "./components/Collioure";
import Telechargement from "./components/Telechargement";
import Contact from "./components/Contact";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/appartement" component={Appartement} />
          <Route exact path="/barcares" component={Barcares} />
          <Route exact path="/port-leucate" component={PortLeucate} />
          <Route exact path="/galamus" component={Galamus} />
          <Route exact path="/Força-real" component={ForcaReal} />
          <Route exact path="/perillos" component={Perillos} />
          <Route exact path="/salses" component={Salses} />
          <Route exact path="/tautavel" component={Tautavel} />
          <Route exact path="/collioure" component={Collioure} />
          <Route exact path="/telechargement" component={Telechargement} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
