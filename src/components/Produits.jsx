import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Loading } from "./UI";
import { useProduit } from "../hooks";
import Card from "./Card";

const filters = [
	{name: "Tous les produits", tag: "all"},
	{name: "Machine à coudre électroniques", tag: "machine-electronique"},
	{name: "Machine à coudre mécaniques", tag: "machine-mecanique"},
	{name: "Brodeuses", tag: "brodeuse"},
	{name: "Surjeteuse", tag: "surjeteuse"},
];

const Produits = () => {
	const [
		electronique,
		mecanique,
		brodeuse,
		surjeteuse
	] = useProduit();
	const loaded = electronique && mecanique && brodeuse && surjeteuse;
	const productList = null;
	const [currentFilter, setCurrentFilter] = useState(0);
	const chooseFilter = (n) => setCurrentFilter(n);
	let displayedProducts = [];

	if(loaded) {
		switch(currentFilter) {
			case 0:
				displayedProducts = displayedProducts.concat(electronique);
				displayedProducts = displayedProducts.concat(mecanique);
				displayedProducts = displayedProducts.concat(brodeuse);
				displayedProducts = displayedProducts.concat(surjeteuse);
				break;
			case 1:
				displayedProducts = electronique;
				break;
			case 2:
				displayedProducts = mecanique;
				break;
			case 3:
				displayedProducts = brodeuse;
				break;
			case 4:
				displayedProducts = surjeteuse;
				break;
		}
	}

	const mappedDisplayedProducts = displayedProducts.map(product => (<Card product={product} />));

	const mappedFilters = filters.map((filter, key) => (
		<div className={(currentFilter === key ? 'produit__filter produit__filter--checked' : 'produit__filter') + " o-hidden bg-white br-5 mr-10 mb-10 trans-200 no-select"} key={ uuidv4() }>
			<input type="radio" id={filter.tag} name="filter" onChange={() => chooseFilter(key)} checked={currentFilter === key} />
	  		<label htmlFor={filter.tag}>{filter.name}</label>
	  	</div>
	));

	return (
		<section className="produit section pt-40 pb-20">
			<div className="ctn">
				<div className="section__head">
					<div className="section__bar bg-theme mr-15"></div>
					<h2 className="section__title m-20">Nos produits</h2>
				</div>
			</div>
			<div className="ctn">
				<p className="prg ctn-20-0">Suspendisse pellentesque vehicula nulla vel faucibus. Nullam hendrerit augue in dapibus eleifend. Nullam aliquet luctus posuere. Morbi ornare porttitor sodales. In luctus feugiat malesuada. Phasellus consectetur nec ligula vitae commodo. Praesent sodales lacinia facilisis. Quisque id ligula vitae turpis blandit ullamcorper.</p>
			</div>
			<div className="ctn produit__filter-container">
				{ mappedFilters }
			</div>
			<div className="ctn">
				{loaded && (
					<div className="produit__list row-10 mt-10">
						{ mappedDisplayedProducts }
					</div>
				)}
				{!loaded && (
					<div className="produit__list-empty row-10 mt-10 bg-white d-flex f-center">
						<Loading />
					</div>
				)}
			</div>
		</section>
	);
};

export default Produits;