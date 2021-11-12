import React, {FunctionComponent} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from "./pages/Home/Home";
import Header from "./Components/Header/Header";
import PageNotFound from "./pages/Page_not_found/page-not-found";


const App: FunctionComponent = () => {
    return (
        <Router>
            <div>
                {/** Barre de navigation */}
                <Header />
                {/** La gestion des routes dans notre application */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;