import React from "react";
import App from "./App";
import Home from "./component/Home/Home";
import TestModel from "./component/TestModel/TestModel";
import { Route } from "react-router-dom";

function Root() {
    return (
        <>
            <Route path="/" exact component={Home} />
            <Route path="/dashboard" exact component={App} />
            <Route path="/test" exact component={TestModel} />
        </>
    );
}

export default Root;