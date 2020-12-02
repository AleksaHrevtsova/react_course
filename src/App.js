import "./App.css";
import { Switch, Route } from "react-router-dom";

import Layout from "./components/Layout.js";
import Navigation from "./components/Navigation";

import Home from "./views/Home.js";
import Categories from "./views/Categories.js";
import CategoryDetails from "./views/CategoryDetails.js";

import Movies from "./views/Movies.js";
import MovieDetails from "./views/MovieDetails.js";

import NotFound from "./views/NotFound.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          PARIS-SCHOOL
          <br />
          Art & Technologies
        </h1>
        <Navigation />
      </header>
      {/* <Layout> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/categories/:catId" component={CategoryDetails} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/movies/:filmId" component={MovieDetails} />

        <Route component={NotFound} />
        {/* <Redirect to="/" /> */}
      </Switch>
      {/* </Layout> */}
    </div>
  );
}
export default App;
