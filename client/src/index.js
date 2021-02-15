import React from "react"
import {BrowserRouter as Router,Switch,Redirect,Route} from "react-router-dom";
import {render} from "react-dom"
import {Main} from "./pages/main/main";
import {List} from "./pages/list/list";
import {User} from "./pages/user/user";
import ErrorBoundry from "./components/ErrorBoundry/ErrorBoundry";
import "./styles/_index.scss"
import "./styles/_fonts.scss"


const App = () => {
    return (

        <Router>
            <ErrorBoundry>
            <Switch>
                <Route path="/main" exact>
                    <Main/>
                </Route>
                <Route path="/Users statistic" exact>
                    <List/>
                </Route>
                <Route path="/Users statistic/:id" exact>
                    <User/>
                </Route>
                <Redirect to="/main"/>
            </Switch>
        </ErrorBoundry>
        </Router>

    )
}

render(<App/>, document.getElementById("root"))