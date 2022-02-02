import React, { useState } from "react";
import Router from "next/router";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { INavbarAdminItem, INavbarAdminProps } from "helpers/interface";
import NavbarAdminItem from "components/BackOffice/NavbarAdminItem";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Button from "components/Button";
import AdminModal from "components/BackOffice/AdminModal";
import Loading from "components/Loading";
import Session from "helpers/session";

const NavbarAdmin: React.FC<INavbarAdminProps> = ({
	sections,
	selectedSection,
	selectSection
}): JSX.Element => {
	const [logginOut, setLoggingOut] = useState<boolean>(false);
	const mappedSection: Array<JSX.Element> = sections.map((item: INavbarAdminItem, key: number) => (
		<NavbarAdminItem
			id={key}
			section={item}
			atClick={selectSection}
			key={uuidv4()}
			active={key === selectedSection}
		/>
	));
	const logout = (): void => {
		setLoggingOut(true);
		Session.remove("user");
		Router.push("/");
	};

	return (
		<div className="navbar-admin h-100 f-c-ce-ce bg-theme">
			<div className="navbar-admin__container h-100 mg-20">
				<Link href="/" passHref>
					<a title="Aller au site" className="w-100 f-r-st-ce">
						<img className="h-40px mg-r-10" src="/singer.png" alt="Singer logo" />
						<img className="h-40px" src="/singer-text.png" alt="Singer text logo" />
					</a>
				</Link>
				<div className="navbar-admin__separator w-100 bg-white mg-t-20 br-5"></div>
				<ul className="pd-t-20 pd-b-20">
					{mappedSection}
				</ul>
				<p className="tx-c">
					<Button
						className="navbar-admin__logout fs-100"
						title="Se déconnecter"
						atClick={logout}
					>
						<React.Fragment>
							<Icon icon={["fas", "lock"]} /> Déconnexion
						</React.Fragment>
					</Button>
				</p>
			</div>
			{logginOut && (
				<AdminModal
					icon={['fas', 'lock']}
					title="Déconnexion..."
				>
					<Loading />
				</AdminModal>
			)}
		</div>
	);
};

export default NavbarAdmin;