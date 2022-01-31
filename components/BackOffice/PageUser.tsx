import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import PageAdmin from "components/BackOffice/PageAdmin";
import Button from "components/Button";

const PageUser = (): JSX.Element => {
	return (
		<PageAdmin className="page-user">
			<React.Fragment>
				<h1 className="pd-20 fs-300">Bienvenue Manjaka,</h1>
				<div className="mg-20 mg-t-0">
					<div className="w-30 h-5px bg-theme br-5"></div>
				</div>
				<div className="w-100 f-r-st-ce mg-t-40">
					<figure className="avatar w-300px h-300px br b-b mg-l-20 o-hidden f-r-ce-ce bg-white">
						<img className="w-100 h-100" src="/fake-machine.jpg" alt="Avatar" />
						<div className="overlay w-100 h-100 tr-200 f-c-ce-ce">
							<Button
								className="change-avatar"
								title="Importer une nouvelle image"
								alt
							>
								<React.Fragment>
									<Icon icon={["fas", "image"]} /> Changer d'avatar
								</React.Fragment>
							</Button>
						</div>
					</figure>
					<div className="mg-l-20">
						<p className="mg-b-20">
							<span className="u">E-mail:</span> <span className="light">manjaka.rajaonson@gmail.com</span>
						</p>
						<p className="mg-b-20">
							<span className="u">Compte créé le:</span> <span className="light">03/01/2020</span> par <span className="pd-5 pd-t-0 pd-b-0 b-b bg-white br-5">NodeJS</span>
						</p>
						<form className="f-c-st-st">
							<input
								className="w-100 pd-5 pd-l-20 pd-r-20 mg-b-20"
								type="password"
								placeholder="Mot de passe actuel"
							/>
							<input
								className="w-100 pd-5 pd-l-20 pd-r-20 mg-b-20"
								type="password"
								placeholder="Nouveau mot de passse"
							/>
							<input
								className="w-100 pd-5 pd-l-20 pd-r-20 mg-b-20"
								type="password"
								placeholder="Répéter le nouveau mot de passe"
							/>
							<Button>
								<React.Fragment>
									<Icon icon={["fas", "lock"]} /> Changer mot de passe
								</React.Fragment>
							</Button>
						</form>
						<p className="theme mg-t-20">Les mots de passes ne correspondent pas.</p>
					</div>
				</div>
			</React.Fragment>
		</PageAdmin>
	);
};

export default PageUser