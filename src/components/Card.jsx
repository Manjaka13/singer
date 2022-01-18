import React from "react";

/*
	Display product info
*/

const CardProduct = ({ product })  => (
	<article className="card-product">
		<figure className="card-product__representation">
			<img className="card-product__image" src={product.photo ? product.photo[0] : "/machine.jpg"} alt="Machine" />
			<p className={`card-product__badge card-product__badge${product.outstock ? "--red" : (typeof(product.promotion.type) == "string" ? "--green" : "--hidden")}`}>
				{product.outstock ? "En rupture de stock" : (typeof(product.promotion.type) == "string" ? "En promotion" : "")}
			</p>
		</figure>
		<h3 className="card-product__title">{product.title}</h3>
		<p className="card-product__price">Produit ajouté le: 09/10/2021</p>
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
