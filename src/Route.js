import React from "react";
import { Route, Switch} from "react-router-dom";
import Home from "./Home/Home";
import Books from "./books/Books";
import Authors from "./authors/Author";

export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/" exact component={Books} />
            <Route path="/" exact component={Authors} />
        </Switch>
    );
}