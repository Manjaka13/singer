import React from "react";
import { v4 as uuidv4 } from "uuid";
import SectionTitle from "components/SectionTitle";
import { ITypeMachine } from "helpers/interface";
import { TYPE_MACHINE } from "helpers/const";

/*
	Categories Machine section
*/

const mappedCategorie: Array<JSX.Element> = TYPE_MACHINE.map((machine: ITypeMachine) => (
	<li
		className="item o-h tr-200 b-b f-r-ce-st p"
		key={ uuidv4() }
	>
		<img className="w-100 h-100" src={ machine.image } alt={ machine.name } />
		<div className="name f-c-ce-en tr-300 ">
			<div className="content bg-theme p-n">
				<h3 className="fs-90 pd-10 tx-c white">{ machine.name }</h3>
				<div className="separator w-30 h-5px bg-white br-5 mg-a"></div>
				<p className="about fs-80 white pd-10 tx-j">{ machine.description }</p>
			</div>
		</div>
	</li>
)
);

const Categories = () => (
	<div id="categories" className="categories">
		<div className="container">
			<div className="w-100">
				<SectionTitle icon={ ["fas", "shopping-cart"] } title="Quelle machine recherchez-vous ?"/>
				<p className="tx-j">
					Proin porta iaculis purus, et congue nibh placerat eu. Mauris interdum lectus aliquet erat tincidunt suscipit ultricies eget purus. Nulla mattis orci eget iaculis pharetra. Vestibulum mattis magna non volutpat malesuada. Duis egestas nec sapien quis interdum. Duis placerat finibus vulputate. Nam hendrerit erat turpis, ac condimentum massa commodo vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel nibh quam.
				</p>
				<ul className="f-r-be-st f-w pd-t-20">{ mappedCategorie }</ul>
			</div>
		</div>
	</div>
);

export default Categories;