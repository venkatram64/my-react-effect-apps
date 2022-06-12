import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import ListEmployee from './components/ListEmployee';
import Navbar from "./components/Navbar";
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Counter from './Counter'

//<Route exact path="/" component={() => <ListEmployee/>}/>
function App() {
  return (
    <div className="container">
      <ToastContainer/>
      <Navbar/>
      
      <Switch>
        <Route exact path="/employees" component={ListEmployee}/>
        <Route path="/add" component={AddEmployee}></Route>
        {/*<Route path="/edit/:id">
          <EditEmployee/>
          </Route>*/}
        <Route path="/edit/:id" render={
          ({history, match}) => (
            <EditEmployee history={history} match={match}/>
          )
        } />
        <Route exact path="/" component={Home}/>
        <Route exact path="/counter" component={Counter}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
