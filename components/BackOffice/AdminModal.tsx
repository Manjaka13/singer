import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { IAdminModalProps } from "helpers/interface";

const AdminModal: React.FC<IAdminModalProps> = ({
	icon,
	title,
	children,
	canClose,
	atClose
}): JSX.Element => {
	const closeModal = (): void => {
		if(canClose && typeof atClose === "function")
			atClose();
	};

	return (
		<div className="admin-modal">
			<div className="admin-modal__overlay w-100 h-100" onClick={closeModal}>
			</div>
			<div className="admin-modal__window w-50 br-20 bg-white o-h">
				{title && (
					<div className="admin-modal__head bg-theme f-r-be-ce o-h n-s">
						<h4 className="mg-l-20 fs-120 white p-n">
							{icon ? (<Icon className="mg-r-10" icon={icon} />) : ''}
							{title ? title : ''}
						</h4>
						{canClose && (
							<div
								className="close f-r-ce-ce w-40px h-40px white mg-r-20 br-50 p tr"
								title="Fermer"
								onClick={closeModal}
							>
								<Icon icon={['fas', 'times']} />
							</div>
						)}
					</div>
				)}
				<div className="admin-modal__body w-100 o-a f-r-ce-ce">
					{children}
				</div>
			</div>
		</div>
	);
};

export default AdminModal;