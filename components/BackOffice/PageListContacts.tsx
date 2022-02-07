import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import PageAdmin from "components/BackOffice/PageAdmin";
import Button from "components/Button";
import Loading from "components/Loading";
import { contactList, contactRemove } from "service/";
import { IContact } from "helpers/interface";

const tabSizes = [
	30,
	50,
	20
];

const PageListContacts = (): JSX.Element => {
	const [contacts, setContacts] = useState<Array<IContact>>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	// Get contact list
	const getContactList = (): void => {
		setLoading(true);
		contactList()
			.then(({payload, caption, status}:
				{payload: Array<IContact>, caption: string, status: number}
			) => {
				if(status ===  1)
					setContacts(payload);
				else setError(caption);
			})
			.catch(() => setError("Une erreur est survenue."))
			.finally(() => setLoading(false));
	};

	// Remove contact
	const deleteContact = (email: string): void => {
		setLoading(true);
		contactRemove({email})
			.then(({caption, status}: {caption: string, status: number}) => {
				if(status ===  1)
					setContacts((prevState) => {
						prevState = prevState.filter(item => item.email != email);
						return prevState;
					});
				else setError(caption);
			})
			.catch(() => setError("Une erreur est survenue."))
			.finally(() => setLoading(false));
	};

	useEffect(() => {
		getContactList();
	}, []);

	const mappedContacts: Array<JSX.Element> = contacts.map((contact: IContact) => (
		<div className="item mg-20 mg-t-10 mg-b-10 br-50 f-r-be-ce tr-200" key={uuidv4()}>
			<p className={`w-${tabSizes[0]} fs-80`}>{contact.date}</p>
			<p className={`w-${tabSizes[1]} fs-80`}>{contact.email}</p>
			<p className={`w-${tabSizes[2]} fs-80 tx-c`}>
				<Button
					className="fs-80"
					title="Supprimer ce contact"
					atClick={() => deleteContact(contact.email)}
				>
					<React.Fragment>
						<Icon icon={["fas", "trash"]} /> Supprimer
					</React.Fragment>
				</Button>
			</p>
		</div>
	));

	return (
		<PageAdmin className="page-list-contacts">
			<React.Fragment>
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
					{loading && (
						<div className="pd-t-20 pd-b-20 f-r-ce-st">
							<Loading />
						</div>
					)}
					{!loading && (
						<React.Fragment>
							{!error && contacts.length > 0 && mappedContacts}
							{!error && contacts.length === 0 && (
								<p className="tx-c pd-t-20 pd-b-20 light">
									<Icon icon={['fas', 'exclamation-circle']}/> La liste est vide.
								</p>
							)}
							{error && (
								<p className="tx-c pd-t-20 pd-b-20 theme">
									<Icon icon={['fas', 'exclamation-circle']}/> {error}
								</p>
							)}
						</React.Fragment>
					)}
				</div>
			</React.Fragment>
		</PageAdmin>
	);
}

export default PageListContacts;