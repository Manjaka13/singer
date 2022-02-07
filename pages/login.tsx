import React from "react";
import Page from "components/Page";
import Login from "components/Login";

/*
	Login page
*/

const LoginPage = (): JSX.Element => (
	<Page
		title="Connexion Singer"
		description="Connectez-vous à votre compte admnistrateur."
		image="cover.jpg"
	>
		<Login />
	</Page>
);

export default LoginPage;
