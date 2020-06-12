import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import TodoLists from "./Components/TodoLists/TodoLists";
import TodoList from "./Components/TodoList/TodoList";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <Router>
      <div className="container">
        <TodoLists />
        <Switch>
          <Homepage exact path="/" component={Homepage} />
          <TodoList path="/lists/:id" component={TodoList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
