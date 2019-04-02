import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import TodoList from "./TodoList.js";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'

var destination = document.querySelector("#container");

ReactDom.render(
    <div className="container">
        <h1 className="center white-text">Todos</h1>
        <TodoList/>
    </div>,
    destination
);