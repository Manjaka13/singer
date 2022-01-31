import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import PageAdmin from "components/BackOffice/PageAdmin";
import Button from "components/Button";

const tabSizes = [
	30,
	50,
	20
];

const contacts = [
	{
		subscriptionDate: "22/01/2022",
		email: "manjaka.rajaonson@gmail.com"
	},
	{
		subscriptionDate: "02/01/2022",
		email: "t.rakotoarisoa@gmail.com"
	}
];

const mappedContacts = contacts.map((contact) => (
	<div className="item mg-20 mg-t-10 mg-b-10 br-50 f-r-be-ce tr-200" key={uuidv4()}>
		<p className={`w-${tabSizes[0]} fs-80`}>{contact.subscriptionDate}</p>
		<p className={`w-${tabSizes[1]} fs-80`}>{contact.email}</p>
		<p className={`w-${tabSizes[2]} fs-80 tx-c`}>
			<Button className="fs-80" title="Supprimer ce contact de la base de données">
				<React.Fragment>
					<Icon icon={["fas", "trash"]} /> Supprimer
				</React.Fragment>
			</Button>
		</p>
	</div>
));

const PageListContacts = () => (
	<PageAdmin className="page-list-contacts">
			<h1 className="pd-20 fs-300">Liste des contacts</h1>
			<div className="mg-20 mg-t-0">
				<div className="w-30 h-5px bg-theme br-5"></div>
			</div>
			<div className="list mg-20 mg-t-40 bg-white o-a">
				<div className="pd-20 f-r-be-ce">
					<p className={`w-${tabSizes[0]} b`}>Date de souscription</p>
					<p className={`w-${tabSizes[1]} b`}>E-mail</p>
					<p className={`w-${tabSizes[2]} b tx-c`}>Actions</p>
				</div>
				<div className="separator mg-l-20 mg-r-20"></div>
				{mappedContacts}
				<div className="separator mg-l-20 mg-r-20"></div>
				<div className="f-r-ce-st pd-t-20">
					<Button className="fs-80" title="Ajouter contact">
						<React.Fragment>
							<Icon icon={["fas", "user-plus"]} /> Ajouter
						</React.Fragment>
					</Button>
				</div>
			</div>
	</PageAdmin>
);

export default PageListContacts;