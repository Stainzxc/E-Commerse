
import { Switch } from "antd";
import About from "./components/About";
import Contact from "./components/Contact";
import Essentials from "./components/Essentials";
import Hero from "./components/Hero";
import Men from "./components/Men";
import Navbar from "./components/Navbar";
import Women from "./components/Women";
import { BrowserRouter as Route, Router } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
      {/* <Router>
        <Switch>
        <Route path="/" exact component={Hero}></Route>
        <Route path="Men" component={Men}></Route>
        <Route path="Women" component={Women}></Route>
        <Route path="About" component={About}></Route>
        <Route path="Essentials" component={Essentials}></Route>
        <Route path="Contact" component={Contact}></Route> */}
        
        <Hero />
        <Men />
        <Women />
        <About />
        <Essentials />
        <Contact /> 
        {/* </Switch>
      </Router> */}
    </>
  );
}

export default App;
