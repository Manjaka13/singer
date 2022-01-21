import React from "react";
import { ICardProductProps } from "helpers/interface";

/*
	Display product basic info
*/

const getMachineName = (type: string): string =>
	type === "electronique"
		? "Machine à coudre électronique"
		: type === "mecanique"
		? "Machine à coudre mécanique"
		: type === "brodeuse"
		? "Brodeuse"
		: "Surjeteuse";

const CardProduct: React.FC<ICardProductProps> = ({ product }): JSX.Element => (
	<article className="card-product">
		<figure className="card-product__representation">
			<img
				className="card-product__image tr-500"
				src={
					process.env.NEXT_PUBLIC_MODE === "local"
						? "/fake-machine.jpg"
						: product.photo && product.photo[0]
						? product.photo[0]
						: "/fake-machine.jpg"
				}
				alt="Machine"
			/>
			<p
				className={`card-product__badge card-product__badge${
					product.outstock
						? "--red"
						: product.promotion && typeof product.promotion.type == "string"
						? "--green"
						: "--hidden"
				}`}
			>
				{product.outstock
					? "En rupture de stock"
					: product.promotion && typeof product.promotion.type == "string"
					? "En promotion"
					: ""}
			</p>
		</figure>
		<h3 className="card-product__title">{product.title}</h3>
		<p className="card-product__price">{getMachineName(product.type)}</p>
		<div className="card-product__separator"></div>
		<p className="card-product__description">
			{product.description ? product.description : ""}
		</p>
		<div className="card-product__discover-box">
			<a
				className="card-product__discover tr-200"
				href="#0"
				title="Découvrir ce produit"
			>
				Découvrir
			</a>
		</div>
	</article>
);

export default CardProduct;
