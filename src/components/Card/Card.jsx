import React from "react";
import classes from "./card.module.css";

const Card = ({ data, handleDelete }) => {
	return (
		<div className={classes.card}>
			<div>
				<img className={classes.image} src={data.image} alt={data.name} />
			</div>

			<h3>{data.name}</h3>

			<div className={classes.priceAndMarketCap}>
				<p>{data.current_price}</p>
				<p>{data.market_cap}</p>
			</div>

			{/* delete button */}
			<button onClick={handleDelete} className={classes.button}>
				x
			</button>
		</div>
	);
};

export default Card;

// "id": "bitcoin",
//     "symbol": "btc",
//     "name": "Bitcoin",
//     "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
//     "current_price": 1585166,
//     "market_cap": 30400489882104,
//     "market_cap_rank": 1,
//     "fully_diluted_valuation": 33277639752845,
//     "total_volume": 1923334000638,
//     "high_24h": 1601987,
//     "low_24h": 1572961,
//     "price_change_24h": -10191.372595772846,
//     "price_change_percentage_24h": -0.63881,
//     "market_cap_change_24h": -232626530983.73438,
//     "market_cap_change_percentage_24h": -0.7594,
//     "circulating_supply": 19184362.0,
//     "total_supply": 21000000.0,
//     "max_supply": 21000000.0,
//     "ath": 5128383,
//     "ath_change_percentage": -69.09244,
//     "ath_date": "2021-11-10T14:24:11.849Z",
//     "atl": 3993.42,
//     "atl_change_percentage": 39591.7534,
//     "atl_date": "2013-07-05T00:00:00.000Z",
//     "roi": null,
//     "last_updated": "2022-10-20T10:33:21.968Z",
//     "price_change_percentage_24h_in_currency": -0.638814368033315
