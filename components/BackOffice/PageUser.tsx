import React, { useState } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import PageAdmin from "components/BackOffice/PageAdmin";
import Button from "components/Button";
import Loading from "components/Loading";
import { useAuth } from "hooks/";

const PageUser = (): JSX.Element => {
	const {user} = useAuth();
	const [loading, setLoading] = useState<boolean>(false);
	const [caption, setCaption] = useState<string | null>(null);
	const [status, setStatus] = useState<number>(-1);

	// Submits form
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const password: string = formData.get("level") as string;
		const newPassword1: string = formData.get("newPassword1") as string;
		const newPassword2: string = formData.get("newPassword1") as string;
		setLoading(true);
	};

	return (
		<PageAdmin className="page-user">
			<React.Fragment>
				<h1 className="pd-20 fs-300">Bienvenue {user ? user.name : "Admnistrateur"},</h1>
				<div className="mg-20 mg-t-0">
					<div className="w-30 h-5px bg-theme br-5"></div>
				</div>
				<div className="w-100 f-r-st-ce mg-t-40">
					<figure className="avatar w-300px h-300px br b-b mg-l-20 o-hidden f-r-ce-ce bg-white">
						<img className="w-100 h-100" src={user && user.avatar ? user.avatar : "/avatar.png"} alt="Avatar" />
						<div className="overlay w-100 h-100 tr-200 f-c-ce-ce">
							<Button
								className="change-avatar"
								title="Importer une nouvelle image"
								alt
							>
								<React.Fragment>
									<Icon icon={["fas", "image"]} /> Changer d&apos;avatar
								</React.Fragment>
							</Button>
						</div>
					</figure>
					<div className="mg-l-20">
						<p className="mg-b-20">
							<span className="u">E-mail:</span> <span className="light">manjaka.rajaonson@gmail.com</span>
						</p>
						{/*<p className="mg-b-20">
							<span className="u">Compte créé le:</span> <span className="light">03/01/2020</span> par <span className="pd-5 pd-t-0 pd-b-0 b-b bg-white br-5">NodeJS</span>
						</p>*/}
						<form className="f-c-st-st" onSubmit={handleSubmit}>
							<input
								className="w-100 pd-5 pd-l-20 pd-r-20 mg-b-20"
								type="password"
								placeholder="Mot de passe actuel"
								name="password"
							/>
							<input
								className="w-100 pd-5 pd-l-20 pd-r-20 mg-b-20"
								type="password"
								placeholder="Nouveau mot de passse"
								name="newPassword1"
							/>
							<input
								className="w-100 pd-5 pd-l-20 pd-r-20 mg-b-20"
								type="password"
								placeholder="Répéter le nouveau mot de passe"
								name="newPassword2"
							/>
							{loading && (<Loading />)}
							{!loading && (
								<Button>
									<React.Fragment>
										<Icon icon={["fas", "lock"]} /> Changer mot de passe
									</React.Fragment>
								</Button>
							)}
						</form>
						{!loading && caption && (
							<p className={`${status === 1 ? 'green' : 'theme'} mg-t-20`}>
								{caption}
							</p>
						)}
					</div>
				</div>
			</React.Fragment>
		</PageAdmin>
	);
};

export default PageUser;