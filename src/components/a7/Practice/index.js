import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles/index.js";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";
import ReduxExamples from "./ReduxExamples/components";


const Practice = () => {
    return (
        <>
            <div className="container">
                <h1>Practice</h1>
                <TodoList/>
                <ConditionalOutput/>
                <Styles/>
                <Classes/>


                <Link to="/a7/twitter/home"> Build</Link>
                <ReduxExamples/>

            </div>

        </>
    )
};

export default Practice;
