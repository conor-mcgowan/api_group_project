import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Search from "./components/Search/Search";
import Favorites from "./components/Favorites/Favorites";
import LoginPage from "./components/Login/Login";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <>
        <Router>
          <header>
            <nav className="nav-bar">
              <NavLink
                to="/login"
                className="nav-link text-center"
                activeClassName="active-link"
              >
                Login
              </NavLink>
              <NavLink
                to="/search"
                className="nav-link text-center"
                activeClassName="active-link"
              >
                Search
              </NavLink>
              <NavLink
                to="/favorites"
                className="nav-link text-center"
                activeClassName="active-link"
              >
                Favorites
              </NavLink>
            </nav>
          </header>
          <main>
            <Switch>
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/favorites" component={Favorites} />
              <Route path="*">
                <Redirect to="/search" />
              </Route>
            </Switch>
          </main>
          <br />
          <footer>This is a footer</footer>
        </Router>
      </>
    </Provider>
  );
}

export default App;
