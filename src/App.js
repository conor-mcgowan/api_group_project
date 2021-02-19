import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search/Search";


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
              <Route exact path="/search" component={SearchPage} />
              <Route exact path="/favorites" component={FavoritesPage} />
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
