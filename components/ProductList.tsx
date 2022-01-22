import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Loading from "components/Loading";
import Card from "components/Card";
import { IProductFilter, IProduct } from "helpers/interface";
import { useProduct } from "hooks/";

const filters: Array<IProductFilter> = [
	{ name: "Tous les produits", tag: "all" },
	{ name: "En promotion", tag: "promotion" },
	{ name: "Machine à coudre électroniques", tag: "machine-electronique" },
	{ name: "Machine à coudre mécaniques", tag: "machine-mecanique" },
	{ name: "Brodeuses", tag: "brodeuse" },
	{ name: "Surjeteuse", tag: "surjeteuse" },
];

const Produits = (): JSX.Element => {
	const [electronique, mecanique, brodeuse, surjeteuse] = useProduct();
	const loaded: boolean =
		electronique.length > 0 &&
		mecanique.length > 0 &&
		brodeuse.length > 0 &&
		surjeteuse.length > 0;
	const [currentFilter, setCurrentFilter] = useState<number>(0);
	const chooseFilter = (n: number): void => setCurrentFilter(n);
	let displayedProducts: Array<IProduct> = [];

	const inPromotion = (item: IProduct): boolean =>
		item.promotion && item.promotion.type && !item.outstock ? true : false;

	if (loaded) {
		switch (currentFilter) {
			case 0:
				displayedProducts = displayedProducts.concat(electronique);
				displayedProducts = displayedProducts.concat(mecanique);
				displayedProducts = displayedProducts.concat(brodeuse);
				displayedProducts = displayedProducts.concat(surjeteuse);
				break;
			case 1:
				displayedProducts = displayedProducts.concat(
					electronique.filter(inPromotion)
				);
				displayedProducts = displayedProducts.concat(mecanique.filter(inPromotion));
				displayedProducts = displayedProducts.concat(brodeuse.filter(inPromotion));
				displayedProducts = displayedProducts.concat(
					surjeteuse.filter(inPromotion)
				);
				break;
			case 2:
				displayedProducts = electronique;
				break;
			case 3:
				displayedProducts = mecanique;
				break;
			case 4:
				displayedProducts = brodeuse;
				break;
			case 5:
				displayedProducts = surjeteuse;
				break;
		}
	}

	const mappedDisplayedProducts: Array<JSX.Element> = displayedProducts.map(
		(product: IProduct) => <Card product={product} key={uuidv4()} />
	);

	const mappedFilters: Array<JSX.Element> = filters.map(
		(filter: IProductFilter, key: number) => (
			<div
				className={
					(currentFilter === key ? "product__filter b-b" : "product__filter") +
					" pd-5 p o-h bg-white br-5 mg-r-10 mg-t-20 tr-200 n-s"
				}
				key={uuidv4()}
			>
				<input
					type="radio"
					id={filter.tag}
					name="filter"
					onChange={() => chooseFilter(key)}
					checked={currentFilter === key}
				/>
				<label className="p" htmlFor={filter.tag}>
					{filter.name}
				</label>
			</div>
		)
	);

	return (
		<section className="product pt-40 pb-20">
			<div className="ctn pd-t-40">
				<div className="f-r-st-ce pd-b-20">
					<div className="bg-theme mg-r-15 w-5px h-40px br-5"></div>
					<h2 className="fs-250">Nos produits</h2>
				</div>
				<p className="tx-j">
					Suspendisse pellentesque vehicula nulla vel faucibus. Nullam hendrerit
					augue in dapibus eleifend. Nullam aliquet luctus posuere. Morbi ornare
					porttitor sodales. In luctus feugiat malesuada. Phasellus consectetur nec
					ligula vitae commodo. Praesent sodales lacinia facilisis. Quisque id ligula
					vitae turpis blandit ullamcorper.
				</p>
				{loaded && (
					<React.Fragment>
						<div className="f-r-st-ce f-w">{mappedFilters}</div>
						<div className="f-r-be-st mg-t-20 f-w">
							{mappedDisplayedProducts}
						</div>
					</React.Fragment>
				)}
				{!loaded && (
					<div className="h-350px b-b mg-t-20 bg-white f-r-ce-ce">
						<Loading />
					</div>
				)}
			</div>
		</section>
	);
};

export default Produits;
