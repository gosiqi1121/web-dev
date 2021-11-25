import React from "react";
import HelloApiClient from "./HelloApiClient";
import MovieApiClient from './MovieApiClient'
const APIExamples = () => {
    return(
        <div>
            <MovieApiClient/>
            <HelloApiClient/>
        </div>
    );
};
export default APIExamples;