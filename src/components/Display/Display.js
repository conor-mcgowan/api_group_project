import React from 'react'

const Display = ({name, image, symbol, price, volume, priceChange, marketCap}) => {
    return (
        <div>
            <div>
                <div>
                    <img src={image} alt="crypto"/>
                    <h1>{name}</h1>
                    <p>{symbol}</p>
                </div>
                <div>
                    <p>${price}</p>
                    <p>${volume}</p>
                    {priceChange < 0 ? (
                        <p className="coin-percent red">{priceChange.
                        toFixed(2)}%</p>
                    ) :(<p className="coin-percent green ">{priceChange.
                        toFixed(2)}%</p>) 
                }
                 <p className="coin-marketCap">
                     Mkt Cap: ${marketCap}
                 </p>
                </div>
            </div>
        </div>
    )
}

export default Display;
