import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import Home from "./Home"
import ParkDetail from "./ParkDetail"

function Main() {

    return (
        <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/park/:id"
            render={routerProps => <ParkDetail {...routerProps} />}
            />
        </Switch>
        </main>
    )
}

export default Main