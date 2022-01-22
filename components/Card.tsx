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
	<article className="card-product bg-white o-h b-b mg-b-20">
		<figure className="card-product__representation f-r-ce-ce w-100 h-200px o-h">
			<img
				className="card-product__image h-100 tr-500"
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
				className={`card-product__badge br-20 white fs-80 p-n pd-5 pd-l-10 pd-r-10 n-s card-product__badge${
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
		<h3 className="card-product__title pd-20 pd-b-10">{product.title}</h3>
		<p className="card-product__price">{getMachineName(product.type)}</p>
		<div className="card-product__separator"></div>
		<p className="card-product__description pd-0 pd-l-20 pd-r-20 tx-j o-h">
			{product.description ? product.description : ""}
		</p>
		<div className="f-r-ce-in w-100 pd-t-20">
			<a
				className="card-product__discover tr-200 pd-10 pd-l-20 pd-r-20 white b-n p"
				href="#0"
				title="Découvrir ce produit"
			>
				Découvrir
			</a>
		</div>
	</article>
);

export default CardProduct;
