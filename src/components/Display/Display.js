import React from "react";
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
      {/* {!isFavorite && <button>Add Favorite</button>}
      {isFavorite && <button> Remove Favorite</button>} */}
    </div>
  );
};

export default Display;
