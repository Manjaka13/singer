import React, { useState, useEffect } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Router from "next/router";
import Button from "components/Button";
import Loading from "components/Loading";
import { useAuth } from "hooks/";

const Login = (): JSX.Element => {
	const {user, loading, error, login} = useAuth();

	if(user)
		Router.push("/admin");

	// Submits form
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if(!user) {
			const formData = new FormData(e.currentTarget);
			login(formData.get("email") as string, formData.get("password") as string);
		}
	};

	return (
		<div className="login w-100 h-100 f-c-ce-ce">
			<div className="login__window w-600px bg-white b-b pd-20 o-h">
				<h1 className="login__title">
					<Icon icon={['fas', 'lock']} /> Connexion
				</h1>
				<div className="w-100 h-5px br-5 bg-theme mg-t-20"></div>
				<form className="f-c-ce-st" onSubmit={handleSubmit}>
					{!user && (
						<React.Fragment>
							<input
								className="login__input mg-t-20 w-100 pd-10 pd-l-20 pd-r-20 b-b br-20"
								type="email"
								name="email"
								placeholder="E-mail"
							/>
							<input
								className="login__input mg-t-20 w-100 pd-10 pd-l-20 pd-r-20 b-b br-20"
								type="password"
								name="password"
								placeholder="Mot de passe"
							/>
							{!loading && (
								<Button
									title="Se connecter"
									className="mg-t-20"
									alt
								>
									Se connecter
								</Button>
							)}
						</React.Fragment>
					)}
					{loading && (
						<Loading className="mg-t-20" />
					)}
					<p className={`tx-c mg-t-20 ${user ? 'green' : 'red'}`}>
						{user ? "Vous allez être redirigé..." : error}
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;