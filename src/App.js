import React from "react";
import "./styles.css";
import { Route, Switch } from "react-router-dom";

import NavComponent from "./components/NavComponent";
import TodoList from "./components/TodoList"
import Footer from "./components/Footer";

import {useSelector} from 'react-redux';

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {

  let homeItems = useSelector((state) => state.home);
  let workItems = useSelector((state) => state.work);
  let schoolItems = useSelector((state) => state.school);

  return (
    <div className="App">
      <NavComponent
      />
      <Switch>
        <Route
          path="/"
          component={() => (
            <TodoList
              title="Home"
              items={homeItems}
            />
          )}
          exact
        />
        <Route
          path="/work"
          component={() => (
            <TodoList
              title="Work"
              items={workItems}
            />
          )}
        />
        <Route
          path="/school"
          component={() => (
            <TodoList
              title="School"
              items={schoolItems}
            />
          )}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
