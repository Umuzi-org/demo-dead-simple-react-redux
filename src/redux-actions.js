export const ADD_TODO = "ADD_TODO";

export const addTodo = ({ heading, description }) => {
  // this function is called an ACTION CREATOR. It creates ACTIONS
  return {
    // this object is called an ACTION
    type: ADD_TODO,
    heading,
    description
  };
};
