import React from "react";
import {Link} from "react-router-dom";

const Build = () => {
    return (
        <>
            <div className="container">
                <h1>Build</h1>
                <Link to="/a6/hello">
                    Hello
                </Link> |
                <Link to="/a6/practice">
                    Practice
                </Link>

            </div>
        </>
    )
};

export default Build;
