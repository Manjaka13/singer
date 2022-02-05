import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import PageAdmin from "components/BackOffice/PageAdmin";
import Button from "components/Button";
import Loading from "components/Loading";
import { useUserList } from "hooks/";
import { IUser } from "helpers/interface";
import { IUseUserList } from "helpers/type";

const tabSizes: Array<number> = [
	15,
	30,
	15,
	20
];

// const users = [
// 	{
// 		name: "Manjaka",
// 		email: "manjaka.rajaonson@gmail.com",
// 		level: 2,
// 		avatar: "/fake-machine.jpg"
// 	},
// 	{
// 		name: "Tahiry",
// 		email: "t.andrian@gmail.com",
// 		level: 2,
// 		avatar: "/fake-machine.jpg"
// 	}
// ];

const PageListAccounts = (): JSX.Element => {
	const [users, error] = useUserList();
	const mappedUsers: Array<JSX.Element> = users.map((user: IUser) => (
	<div className="item mg-20 mg-t-10 mg-b-10 br-50 f-r-be-ce tr-200" key={uuidv4()}>
		<figure className="avatar">
			<img
				className="w-60px h-60px br o-h b-b"
				src={user.avatar || "/avatar.png"}
				alt={"Avatar " + user.name}
			/>
		</figure>
		<p className={`w-${tabSizes[0]} fs-80`}>{user.name}</p>
		<p className={`w-${tabSizes[1]} fs-80`}>{user.email}</p>
		<p className={`w-${tabSizes[2]} fs-80`}>Niv. {user.level}</p>
		<p className={`w-${tabSizes[3]} fs-80`}>
			<Button className="fs-80" title="Supprimer cet utilisateur">
				<React.Fragment>
					<Icon icon={["fas", "trash"]} /> Supprimer
				</React.Fragment>
			</Button>
		</p>
	</div>
));

	return (
		<PageAdmin className="page-list-accounts">
			<React.Fragment>
				<h1 className="pd-20 fs-300">Comptes admnistrateurs</h1>
				<div className="mg-20 mg-t-0">
					<div className="w-30 h-5px bg-theme br-5"></div>
				</div>
				<div className="list mg-20 mg-t-40 bg-white o-a">
					<div className="pd-20 f-r-be-ce">
						<p className="avatar">Avatar</p>
						<p className={`w-${tabSizes[0]} b`}>Nom</p>
						<p className={`w-${tabSizes[1]} b`}>E-mail</p>
						<p className={`w-${tabSizes[2]} b`}>Habilitation</p>
						<p className={`w-${tabSizes[3]} b`}>Actions</p>
					</div>
					<div className="separator mg-l-20 mg-r-20"></div>
					{error && (
						<p className="tx-c pd-t-20 pd-b-20 theme">Session expirée, veuillez vous déconnecter !</p>
					)}
					{!error && users.length > 0 && mappedUsers}
					{!error && users.length === 0 && (
						<React.Fragment>
							<div className="h-100 pd-t-20 pd-b-20 f-c-ce-ce">
								<Loading />
								<p className="p-n n-s pd-t-20">Chargement...</p>
							</div>
						</React.Fragment>
					)}
					{users.length > 0 && (
						<React.Fragment>
							<div className="separator mg-l-20 mg-r-20"></div>
							<div className="f-r-ce-st pd-t-20">
								<Button className="fs-80" title="Créer nouvel utilisateur">
									<React.Fragment>
										<Icon icon={["fas", "user-plus"]} /> Nouveau
									</React.Fragment>
								</Button>
							</div>
						</React.Fragment>
					)}
				</div>
			</React.Fragment>
		</PageAdmin>
	);
}

export default PageListAccounts;