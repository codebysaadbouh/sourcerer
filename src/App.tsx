import React, {FunctionComponent} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from "./pages/Home";
import PageNotFound from "./pages/page-not-found";

const App: FunctionComponent = () => {
    return (
        <Router>
            <div>
                <nav> {/** Barre de navigation */}
                    
                </nav>
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