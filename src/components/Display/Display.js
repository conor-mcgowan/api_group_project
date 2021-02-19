import React from "react";
import { deleteFavorite } from "../../redux/actions/FavoritesActions";
//key, name, image, symbol, markeCap, price, priceChange, volume

const Display = ({
  name,
  image,
  symbol,
  marketCap,
  price,
  priceChange,
  volume,
}) => {
  return (
    <div>
      <h3>
        {name}, {symbol}
      </h3>
      <img src={{ image }} />
      <article>{price}</article>
      <article>{priceChange}</article>
      <article>{marketCap}</article>
      <article>{volume}</article>
      {!isFavorite && (
        <button onClick={() => addFavorite(coin)}>Add Favorite</button>
      )}
      {isFavorite && (
        <button onClick={() => deleteFavorite(coin.id)}>Remove Favorite</button>
      )}
    </div>
  );
};

export default Display;
