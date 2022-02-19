import React, { Fragment, useEffect } from "react";
import Router from "next/router";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Heading from "components/Heading";
import Navigation from "components/Navigation/Navigation";
import Spinner from "components/Spinner";
import Loading from "components/Loading";
import { useAuth } from "hooks/";
import { ILogin } from "helpers/interface";

/*
	Page for login
*/

const LoginPage = (): JSX.Element => {
	const { user, login, loading, error } = useAuth();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const user: ILogin = {
			email: formData.get("email") as string,
			password: formData.get("password") as string
		};
		login(user);
	};

	useEffect(() => {
		if(user)
			Router.push("/admin");
	}, []);

	return user ? <Loading /> : (
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
						<form className="login__form w-100 tx-c br-5 o-h" onSubmit={ handleSubmit }>
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
							{!loading && (
								<button
									className="button mg-t-20"
									type="submit"
									title="Cliquer pour se connecter"
								>
									Se connecter
								</button>
							)}
							{loading && (
								<div className="mg-t-20 w-100 f-r-ce-ce">
									<Spinner className="mg-a" />
								</div>
							)}
							{error && (
								<p className="red tx-c pd-20">{ error }</p>
							)}
						</form>
					</div>
				</div>
			</main>
		</Fragment>
	);
}

export default LoginPage;