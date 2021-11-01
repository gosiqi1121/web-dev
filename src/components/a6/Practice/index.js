import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles/index.js";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";
const Practice = () => {
    return (
        <>
            <div className="container">
                <h1>Practice</h1>
                <TodoList/>
                <ConditionalOutput/>
                <Styles/>
                <Classes/>

                <Link to="/a6/hello">Hello</Link> |
                <Link to="/a6/twitter/home">Build</Link>
            </div>

        </>
    )
};

export default Practice;
