import React, { useState, useEffect, useRef } from "react";
import Router from "next/router";
import Page from "components/Page";
import Button from "components/Button";
import Loading from "components/Loading";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { userSignin } from "service/";
import Session from "helpers/session";

/*
	Login page
*/

const LoginPage = (): JSX.Element => {
	const [pageLoaded, setPageLoaded] = useState<boolean>(false);
	const [caption, setCaption] = useState<string>("");
	const [status, setStatus] = useState<number>(0);
	const [loading, setLoading] = useState<boolean>(false);
	const refEmail = useRef<HTMLInputElement>(null);
	const refPassword = useRef<HTMLInputElement>(null);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if(refEmail && refEmail.current && refPassword && refPassword.current) {
			const user = {
				email: refEmail.current.value,
				password: refPassword.current.value,
			};
			setLoading(true);
			userSignin(user)
				.then(data => {
					if(data.status != status)
						setStatus(data.status);
					if(data.status === 0) {
						setCaption(data.caption);
						setLoading(false);
					}
					else {
						setCaption("Connecté avec succès, vous allez être redirigé...");
						data.payload.token = data.caption;
						Session.set("user", data.payload);
						Router.push("/admin");
					}
					// console.log(data.payload);
				})
				.catch(e => {
					setCaption(e);
					setLoading(false);
				});
			refPassword.current.value = "";
		}
	};

	useEffect(() => {
		if(Session.get("user"))
			Router.push("/admin");
		else
			setPageLoaded(true);
	}, []);

	return !pageLoaded ? <React.Fragment></React.Fragment> : (
		<Page
			title="Connexion Singer"
			description="Connectez-vous à votre compte admnistrateur."
			image="cover.jpg"
		>
			<div className="login w-100 h-100 f-c-ce-ce">
				<div className="login__window w-600px bg-white b-b pd-20 o-h">
					<h1 className="login__title"><Icon icon={['fas', 'lock']} /> Connexion</h1>
					<div className="w-100 h-5px br-5 bg-theme mg-t-20"></div>
					<form className="f-c-ce-st" onSubmit={handleSubmit}>
						{status != 1 && (
							<React.Fragment>
								<input
									className="login__input mg-t-20 w-100 pd-10 pd-l-20 pd-r-20 b-b br-20"
									type="email"
									placeholder="E-mail"
									ref={refEmail}
								/>
								<input
									className="login__input mg-t-20 w-100 pd-10 pd-l-20 pd-r-20 b-b br-20"
									type="password"
									placeholder="Mot de passe"
									ref={refPassword}
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
						<p className={`tx-c mg-t-20 ${status === 0 ? 'red' : 'green'}`}>
							{caption}
						</p>
					</form>
				</div>
			</div>
		</Page>
	);
}

export default LoginPage;
