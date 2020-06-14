import React from "react";

import TodoLists from "./Components/TodoLists/TodoLists";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import TodoList from "./Components/TodoList/TodoList";

function App() {
  return (
    <div className="container">
      <TodoLists />
      <Router>
        <Switch>
          <Homepage exact path="/" component={Homepage} />
          <TodoList path="/list/:id" component={TodoList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
