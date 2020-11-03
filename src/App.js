import React, { Component } from "react";

import { v4 as uuidv4 } from "uuid";

import TodoView from "./components/TodoView";

export default class App extends Component {
  state = {
    todoList: [
      {
        id: uuidv4(),
        todo: "Walk the dog",
      },
      {
        id: uuidv4(),
        todo: "Buy Milk",
      },
      {
        id: uuidv4(),
        todo: "Clean shorts",
      },
    ],
    todoValue: "",
  };

  
  };
