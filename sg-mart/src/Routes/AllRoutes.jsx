import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import Home from '../pages/Home';

const AllRoutes = () => {
  return (
    <div>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
    </div>
  )
}

export default AllRoutes
