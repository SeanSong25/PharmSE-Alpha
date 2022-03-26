import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from "./redux/store";

import Navbar from "./components/navbar/Navbar";
import Feed from "./components/feed/Feed";
import "./App.css";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Feed />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
