import React, { Fragment } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Heading from "components/Heading";
import Navigation from "components/Navigation/Navigation";

/*
	Page for login
*/

const LoginPage = (): JSX.Element => (
	<Fragment>
		<Heading
			title="Connexion Singer"
			description="Connectez-vous à votre compte admnistrateur."
			image="/assets/representation.jpg"
		/>
		<main className="w-100">
			<Navigation notHome />
			<div className="login w-100 o-h f-c-ce-ce">
				<div className="login__window w-60 h-60 b-b bg-white f-c-st-st">
					<h2 className="fs-200 pd-20"><Icon icon={ ["fas", "lock"] } /> Connexion</h2>
					<div className="login__separator mg-l-20 h-5px br-5 bg-t"></div>
					<form className="login__form w-100 tx-c br-5 o-h">
						<div className="login__item mg-l-20 f-r-ce-ce mg-t-20 b-b">
							<div className="icon bg-t white o-h f-r-ce-ce fs-170">
								<Icon icon={ ["fas", "user"] } />
							</div>
							<input
								className="input"
								type="email"
								name="email"
								placeholder="Entrer votre identifiant"
							/>
						</div>
						<div className="login__item mg-l-20 f-r-ce-ce mg-t-20 b-b">
							<div className="icon bg-t white o-h f-r-ce-ce fs-170">
								<Icon icon={ ["fas", "key"] } />
							</div>
							<input
								className="input"
								type="password"
								name="password"
								placeholder="Entrer votre mot de passe"
							/>
						</div>
						<button
							className="button mg-t-20"
							type="submit"
							title="Cliquer pour se connecter"
						>
							Se connecter
						</button>
						<p className="green tx-c pd-20">This is a caption.</p>
					</form>
				</div>
			</div>
		</main>
	</Fragment>
);

export default LoginPage;