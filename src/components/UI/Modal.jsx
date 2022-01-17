import React from "react";

/*
	Modal for displaying content
*/

const Modal = ({ title, children, opened, atClose }) => {
	return (
		<div
			className={
				"col-10 f-center p-center bg-hex00000066" + (opened ? "" : " hidden")
			}
		>
			<div className="trans row-xlg-4 row-lg-5 row-sm-8 ctn-20-20 br-10 bg-white">
				<h2 className="mb-20">{title}</h2>
				{children || ""}
				<div className="row-10 f-center pt-20">
					<button className="btn-red" onClick={atClose}>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
