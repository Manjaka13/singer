import React from "react";
import Page from "components/Page";
import Button from "components/Button";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

/*
	Login page
*/

const LoginPage = (): JSX.Element => (
	<Page
		title="Connexion Singer"
		description="Connectez-vous à votre compte admnistrateur."
		image="cover.jpg"
	>
		<div className="login w-100 h-100 f-c-ce-ce">
			<div className="login__window w-600px bg-white b-b pd-20 o-h">
				<h1 className="login__title"><Icon icon={['fas', 'lock']} /> Connexion</h1>
				<div className="w-100 h-5px br-5 bg-theme mg-t-20"></div>
				<form className="f-c-ce-st">
					<input
						className="mg-t-20 w-100 pd-t-10 pd-b-10"
						type="text"
						placeholder="Nom"
					/>
					<input
						className="mg-t-20 w-100 pd-t-10 pd-b-10"
						type="password"
						placeholder="Mot de passe"
					/>
					<Button
						title="Se connecter"
						className="mg-t-20"
						alt
					>
						Se connecter
					</Button>
					<p className="tx-c red mg-t-20">This is a caption</p>
				</form>
			</div>
		</div>
	</Page>
);

export default LoginPage;
