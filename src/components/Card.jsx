import React from "react";

/*
	Display product info
*/

const getMachineName = (type) => (
	type === "electronique" ? "Machine à coudre électronique" :
	type === "mecanique" ? "Machine à coudre mécanique" :
	type === "brodeuse" ? "Brodeuse" : "Surjeteuse"
);

const CardProduct = ({ product })  => (
	<article className="card-product">
		<figure className="card-product__representation">
			<img
				className="card-product__image"
				src={process.env.MODE === "local" ? "/machine.jpg" : (product.photo ? product.photo[0] : "/machine.jpg")}
				alt="Machine"
			/>
			<p className={`card-product__badge card-product__badge${product.outstock ? "--red" : (typeof(product.promotion.type) == "string" ? "--green" : "--hidden")}`}>
				{product.outstock ? "En rupture de stock" : (typeof(product.promotion.type) == "string" ? "En promotion" : "")}
			</p>
		</figure>
		<h3 className="card-product__title">{product.title}</h3>
		<p className="card-product__price">
			{ getMachineName(product.type) }
		</p>
		<div className="card-product__separator"></div>
		<p className="card-product__description">{product.description}</p>
		<div className="card-product__discover-box">
			<a className="card-product__discover" href="#0" title="Découvrir ce produit">
				Découvrir
			</a>
		</div>
	</article>
);

export default CardProduct;
