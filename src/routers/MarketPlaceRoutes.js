import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import IndexScreen from '../screens/marketplace/IndexScreen'
import Navbar from '../ui/Navbar'

export const MarketPlaceRoutes = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={IndexScreen} />
                <Redirect to="/" />
            </Switch>
        </>
    )
}
