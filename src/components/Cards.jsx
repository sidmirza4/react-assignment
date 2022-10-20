import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import classes from "./cards.module.css";

const url =
	"https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h";

const Cards = () => {
	const [data, setData] = useState([]);
	const [removedCards, setRemovedCards] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	useEffect(() => {
		// filter out the removed cards
		setData((prevData) => {
			const cardsToRemove = removedCards.map((card) => card.id);
			return prevData.filter((card) => !cardsToRemove.includes(card.id));
		});
	}, [removedCards]);

	const handleDelete = (coin) => {
		setRemovedCards((prevRemCards) => [...prevRemCards, coin]);
	};

	const undoDeletedCards = () => {
		setData((prevData) => [...prevData, ...removedCards]);
		setRemovedCards([]);
	};

	return (
		<>
			<div className={classes.cardsContainer}>
				{data.map((coin) => (
					<Card
						key={coin.id}
						data={coin}
						handleDelete={() => handleDelete(coin)}
					/>
				))}
			</div>

			<button className="undo" onClick={undoDeletedCards}>
				Undo
			</button>
		</>
	);
};

export default Cards;
