import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles/index.js";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";
import ReduxExamples from "./ReduxExamples/components";
import APIExamples from './APIExamples'
import Movies from './Movies'


const Practice = () => {
    return (
        <>
            <div className="container">
                <h1>A9 Practice</h1>
                <Link to="a9/twitter">Twitter</Link>
                <Movies/>
            </div>

        </>
    )
};

export default Practice;
