import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import store from "./redux/store";

import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/navbar/Navbar";
import Feed from "./components/feed/Feed";
import Question from "./components/question/Question";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<SignUp />} />
            <Route
              exact
              path="/feed"
              element={
                <Fragment>
                  <Navbar />
                  <Feed />
                </Fragment>
              }
            />
            <Route
              path="/question/:questionID"
              element={
                <Fragment>
                  <Navbar />
                  <Question />
                </Fragment>
              }
            />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
