import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import ListEmployee from './components/ListEmployee';
import Navbar from "./components/Navbar";

//<Route exact path="/" component={() => <ListEmployee/>}/>
function App() {
  return (
    <div className="container">
      <ToastContainer/>
      <Navbar/>
      
      <Switch>
        <Route exact path="/" component={ListEmployee}/>
        <Route path="/add" component={AddEmployee}></Route>
        {/*<Route path="/edit/:id">
          <EditEmployee/>
          </Route>*/}
        <Route path="/edit/:id" render={
          ({history, match}) => (
            <EditEmployee history={history} match={match}/>
          )
        } />
      </Switch>
    </div>
  );
}

export default App;
