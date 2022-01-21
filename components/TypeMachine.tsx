import React from "react";
import { ITypeMachineItem } from "helpers/interface";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";

library.add(faEye);

const listTypes: Array<ITypeMachineItem> = [
	{
		name: "Machine à coudre mécanique",
		description:
			"Parcourir notre large catalogue de marques de machines à coudre totalement mécanique.",
		image: "type-machines/mecanique.jpg",
		link: "#mecanique",
	},
	{
		name: "Machine à coudre éléctronique",
		description:
			"Nous avons plusieurs marques de machines à coudres qui eux sont éléctroniques.",
		image: "type-machines/electronique.jpg",
		link: "#electronique",
	},
	{
		name: "Brodeuse",
		description:
			"Chez Singer, vous pouvez choisir parmi une large liste dans notre catalogue pour les brodeuses.",
		image: "type-machines/brodeuse.jpg",
		link: "#brodeuse",
	},
	{
		name: "Surjeteuse",
		description:
			"Avec une grande collection de marques de surjeteuses vous trouverez à coup sûr votre bonheur.",
		image: "type-machines/surjeteuse.jpg",
		link: "#surjeteuse",
	},
];

const TypeMachine = (): JSX.Element => {
	const mappedType: Array<JSX.Element> = listTypes.map(
		(item: ITypeMachineItem) => (
			<li
				className="item o-hidden tr-200 border f-row-center-start"
				key={uuidv4()}
			>
				<img className="w-100 h-100" src={item.image} alt={item.name} />
				<div className="name f-col-center-end tr-300 ">
					<a
						className="view tr-200 mg-bottom-20 pd-20 pd-top-10 pd-bottom-10 border-none pointer bg-white br-10"
						href={item.link}
						title="Découvrir ce type de produit"
					>
						<Icon icon={["fas", "eye"]} /> Jetter un oeil
					</a>
					<div className="content bg-theme pointer-none">
						<h3 className="fs-90 pd-10 tx-center white">{item.name}</h3>
						<div className="separator w-30 h-5px bg-white br-5 mg-auto"></div>
						<p className="about fs-80 white pd-10 tx-justify">{item.description}</p>
					</div>
				</div>
			</li>
		)
	);

	return (
		<section className="type-machine pt-40 pb-20">
			<div className="ctn pd-top-40">
				<div className="f-row-start-center pd-bottom-20">
					<div className="bg-theme mg-right-15 w-5px h-40px br-5"></div>
					<h2 className="fs-250">Quelle machine recherchez-vous ?</h2>
				</div>
				<p className="tx-justify">
					Proin porta iaculis purus, et congue nibh placerat eu. Mauris interdum
					lectus aliquet erat tincidunt suscipit ultricies eget purus. Nulla mattis
					orci eget iaculis pharetra. Vestibulum mattis magna non volutpat malesuada.
					Duis egestas nec sapien quis interdum. Duis placerat finibus vulputate. Nam
					hendrerit erat turpis, ac condimentum massa commodo vitae. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. Cras vel nibh quam.
				</p>
				<ul className="f-row-between-start f-wrap pd-top-20">{mappedType}</ul>
			</div>
		</section>
	);
};

export default TypeMachine;
