import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import store from "./store.js";
import { addTodo } from "./redux-actions.js";

function TodoListDumb(props) {
  return (
    <div>
      <h1>TODO</h1>

      {props.todos.map((item, index) => (
        <div key={index}>
          <b>{item.heading}</b> : {item.description}
        </div>
      ))}

      <button onClick={props.handleClick}>Add item</button>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => {
      dispatch(addTodo({ heading: "winning", description: "yeah yeah yeah" }));
    }
  };
};

const mapStateToProps = state => {
  return {
    todos: state
  };
};

const Todolist = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListDumb);

function App() {
  return (
    <Provider store={store}>
      <Todolist />
    </Provider>
  );
}

export default App;
