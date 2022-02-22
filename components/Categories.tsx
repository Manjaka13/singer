import React from "react";
import { v4 as uuidv4 } from "uuid";
import SectionTitle from "components/SectionTitle";
import { ITypeMachine } from "helpers/interface";
import { TYPE_MACHINE } from "helpers/const";

/*
	Categories Machine section
*/

const mappedCategorie: Array<JSX.Element> = TYPE_MACHINE.map(
	(machine: ITypeMachine) => (
		<li className="item o-h tr-200 b-b f-r-ce-st p" key={uuidv4()}>
			<img className="mg-a h-100" src={machine.image} alt={machine.name} />
			<div className="name f-c-ce-en tr-300 ">
				<div className="content bg-theme p-n">
					<h3 className="fs-90 pd-10 tx-c white">{machine.name}</h3>
					<div className="separator w-30 h-5px bg-white br-5 mg-a"></div>
					<p className="about fs-80 white pd-10 tx-j">{machine.description}</p>
				</div>
			</div>
		</li>
	)
);

const Categories = () => (
	<div id="categories" className="categories">
		<div className="container">
			<div className="w-100">
				<SectionTitle icon={["fas", "shopping-cart"]} title="Nos produits" />
				<p className="tx-j">
					Dans notre atelier, découvrez différentes machines à coudre de marque
					reconnue; adaptée selon vos besoins tels que Madam 2 qui va vous
					accompagner dans vos créativités avec sa ligne moderne et généreuse et ses
					capacités de Couture très variée! Stylist 4085 dotés de technologies
					modernes ou encore la brodeuse SE300 qui elle est complète et élégante!
				</p>
				{/* f-r-be-st f-w pd-t-20 */}
				<ul className="categories__list pd-t-20 ">{mappedCategorie}</ul>
			</div>
		</div>
	</div>
);

export default Categories;
