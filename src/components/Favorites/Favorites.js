import React from "react";
import Display from "../Display/Display";
import { connect } from "react-redux";
import { deleteFavorite } from "../../redux/actions";

const Favorites = (props) => {
  return (
    <>
      <h1>FavoritesPage</h1>
      <div>(Favorites results)</div>
    </>
  );
};

export default Favorites;
