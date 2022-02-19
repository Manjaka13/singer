import React, { Fragment, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import Heading from "components/Heading";
import { useAuth } from "hooks/";

/*
	Page for login
*/

const AdminPage = (): JSX.Element => {
	const { user, logout } = useAuth();

	useEffect(() => {
		if(!user)
			Router.push("/login");
	}, []);

	return !user ? <Fragment></Fragment> : (
		<Fragment>
			<Heading
				title="Connexion Singer"
				description="Connectez-vous à votre compte admnistrateur."
				image="/assets/representation.jpg"
			/>
			<main className="w-100">
				<h1 className="pd-20">Admnistration page !</h1>
				<h2 className="pd-b-20">Welcome { user.name }</h2>
				<Link href="/" passHref>
					<a className="button">
						Home
					</a>
				</Link>
				<button className="button" onClick={ () => logout() }>
					Logout
				</button>
			</main>
		</Fragment>
	);
}

export default AdminPage;