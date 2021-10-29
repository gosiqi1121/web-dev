import React from "react";
import {Link} from "react-router-dom";

const Practice = () => {
    return (
        <>
            <div className="container">
                <h1>Practice</h1>
                <Link to="/a6/hello">
                    Hello
                </Link> |
                <Link to="/a6/build">
                    Build
                </Link>

            </div>
        </>
    )
};

export default Practice;
