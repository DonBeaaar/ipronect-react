import React from 'react'
import {BrowserRouter as Router, Switch } from 'react-router-dom'
import LoginScreen from '../screens/auth/LoginScreen'
import { MarketPlaceRoutes } from './MarketPlaceRoutes'
import {PrivateRoute} from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

const IpronectRouter = () => {

    const isAuthenticated = false;
    return (
        <>
            <Router>
                <Switch>
                    {/* Publicas */}
                    <PublicRoutes path="/login" isAuthenticated={isAuthenticated}  component={LoginScreen} />
                    {/* Privadas */}
                    <PrivateRoute path="/" isAuthenticated={isAuthenticated} component={MarketPlaceRoutes} />
                </Switch>

            </Router>
        </>
    )
}

export default IpronectRouter
