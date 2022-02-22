import React, { useState, useEffect } from "react";

/*
	Cover title
*/

const textList: Array<string> = ["Promotions", "Produits", "Services"];

const CoverTitle = (): JSX.Element => {
	const [currentText, setCurrentText] = useState<number>(0);

	useEffect(() => {
		const id = setInterval(() => {
			setCurrentText((prevState) =>
				prevState + 1 >= textList.length ? 0 : prevState + 1
			);
		}, 2000);
		return () => clearInterval(id);
	}, []);

	const mappedText = textList.map((text: string, key: number) => (
		<div
			className={`${
				key === currentText ? "item--selected" : "item"
			} w-100 h-100 f-r-ce-ce tr-200`}
			key={key}
		>
			<h2 className="mini-title white fs-500">{ text }</h2>
		</div>
	));

	return (
		<div className="cover-title f-c-st-ce w-60 h-100">
			<h1 className="title white fs-500">Chez Singer, profitez de divers:</h1>
			<div className="text h-80px o-h br-10 bg-t">
				{ mappedText }
			</div>
			<div className="separator w-100 h-5px br-5 bg-theme mg-t-20 mg-b-20"></div>
			<p className="about pd-10 br-5 white tx-j">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam magna dui, blandit eget malesuada sit amet, dapibus bibendum nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
			</p>
		</div>
	);
};

export default CoverTitle;
