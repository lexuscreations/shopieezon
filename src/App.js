import React from "react"
import Navbar from "./Components/Layouts/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Error404 from "./Components/Error/404/404"
import { BrowserRouter, Route, Switch } from "react-router-dom"

export default () =>{
  return (
    <>
      <BrowserRouter>
          <Navbar />

          <Switch>

            <Route exact path="/" component={props => <Home />} />

            <Route component={props => <Error404 props={props} />} />

          </Switch>

        <div className="overlayCus"></div>

      </BrowserRouter>
    </>
  )
}