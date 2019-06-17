import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import routes from './routes'; 
import './assets/scss/index.scss'

function App() {
    const navLinks = routes.filter((route) => route.path !== '/404');

    return(
        <React.Fragment>
            <Navbar links={navLinks} />
            <Switch>
                {routes.map((route) => 
                    <Route
                        key={route.id}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                )}
                <Redirect to='/404' />
            </Switch>
        </React.Fragment>
    );
}

export default App;