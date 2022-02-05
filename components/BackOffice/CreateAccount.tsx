import React, { useState, useRef } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Button from "components/Button";
import Loading from "components/Loading";
import { userCreate } from "service";

const CreateAccount = ({getUserList}: {getUserList: () => void}): JSX.Element => {
	const refName = useRef(null);
	const refEmail = useRef(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [caption, setCaption] = useState<string>("");
	const [status, setStatus] = useState<number>(-1);
	// Creates the account
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if(!loading) {
			const formData = new FormData(e.currentTarget);
			const user: IUser = {
				name: formData.get("name") as string,
				email: formData.get("email") as string,
				level: parseInt(formData.get("level")) as number
			};
			if(refName)
				refName.current.value = "";
			if(refEmail)
				refEmail.current.value = "";
			setLoading(true);
			userCreate(user)
				.then(({caption, status}) => {
					setStatus(status);
					setCaption(caption);
					if(status === 1)
						getUserList();
				})
				.catch(e => {
					setStatus(0);
					setCaption("Une erreur est survenue.");
				})
				.finally(() => setLoading(false));
		}
	};

	return (
		<div className="create-account bg-whitesmoke mg-auto br-10 o-h">
			<div className="box mg-auto pd-t-20 pd-b-20">
				<h2 className="mg-b-10">
					<Icon icon={["fas", "plus-circle"]} /> Créer un compte
				</h2>
				<form className="f-c-ce-st" onSubmit={handleSubmit}>
					<input
						className="input pd-10 pd-t-5 pd-b-5 mg-b-10 b-b br-10"
						type="text"
						name="name"
						placeholder="Nom du compte"
						ref={refName}
					/>
					<input
						className="input pd-10 pd-t-5 pd-b-5 mg-b-10 b-b br-10"
						type="email"
						name="email"
						placeholder="Adresse e-mail"
						ref={refEmail}
					/>
					<select className="input select pd-10 pd-t-5 pd-b-5 mg-b-10 b-b br-10" name="level">
						<option value="1">Admnistrateur</option>
						<option value="2">Développeur</option>
					</select>
					<div className="f-r-ce-st mg-b-10">
						{loading && (<Loading />)}
						{!loading && (
							<Button className="fs-80" title="Créer nouvel utilisateur">
								<React.Fragment>
									<Icon icon={["fas", "user-plus"]} /> Nouveau
								</React.Fragment>
							</Button>
						)}
					</div>
					<p className={`${status === 1 ? 'green' : 'red'} tx-c`}>{caption}</p>
				</form>
			</div>
		</div>
	);
};

export default CreateAccount;