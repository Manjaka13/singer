import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import img1 from "../assets/brodeuse.jpg";
import img2 from "../assets/machine electronique.jpg";
import img3 from "../assets/machine mecanique.jpg";
import img4 from "../assets/surjeteuse.jpg";

library.add(faEye);

const listTypes = [
	{
		name: "Machine à coudre mécanique",
		description:
			"Parcourir notre large catalogue de marques de machines à coudre totalement mécanique.",
		image: img1,
		link: "#mecanique"
	},
	{
		name: "Machine à coudre éléctronique",
		description:
			"Nous avons plusieurs marques de machines à coudres qui eux sont éléctroniques.",
		image: img2,
		link: "#electronique"
	},
	{
		name: "Brodeuse",
		description:
			"Chez Singer, vous pouvez choisir parmi une large liste dans notre catalogue pour les brodeuses.",
		image: img3,
		link: "#brodeuse"
	},
	{
		name: "Surjeteuse",
		description:
			"Avec une grande collection de marques de surjeteuses vous trouverez à coup sûr votre bonheur.",
		image: img4,
		link: "#surjeteuse"
	},
];

const Type = () => {
	const mappedType = listTypes.map(item => (
		<li className="choixmachine__list-item" key={uuidv4()}>
			<img className="image" src={item.image} alt={item.name} />
			<div className="name">
				<a className="view" href={item.link} title="Découvrir ce type de produit">
					<Icon icon={['fas', 'eye']} /> Jetter un oeil
				</a>
				<div className="content">
					<h3 className="type-name">{item.name}</h3>
					<div className="separator"></div>
					<p className="about">{item.description}</p>
				</div>
			</div>
		</li>
	));

	return (
		<section className="type section pt-40 pb-20">
			<div className="ctn">
				<div className="section__head">
					<div className="section__bar bg-theme mr-15"></div>
					<h2 className="section__title m-20">Quelle machine recherchez-vous ?</h2>
				</div>
			</div>
			<div className="ctn">
				<p className="prg ctn-20-0">Proin porta iaculis purus, et congue nibh placerat eu. Mauris interdum lectus aliquet erat tincidunt suscipit ultricies eget purus. Nulla mattis orci eget iaculis pharetra. Vestibulum mattis magna non volutpat malesuada. Duis egestas nec sapien quis interdum. Duis placerat finibus vulputate. Nam hendrerit erat turpis, ac condimentum massa commodo vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel nibh quam.</p>
			</div>
			<div className="ctn">
				<ul className="choixmachine__list">
					{ mappedType }
				</ul>
			</div>
		</section>
	);
}

export default Type;