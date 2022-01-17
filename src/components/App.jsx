import React, { useState } from "react";
import { useTest } from "../hooks";
import { Modal } from "./UI";
import Page from "./Page";

/*
	Main page
*/

const App = () => {
	const [status, color] = useTest();
	const [modalOpened, setModalOpened] = useState(false);
	const toggleModal = () => setModalOpened(!modalOpened);

	return (
		<Page>
			<React.Fragment>
				<h1 className="ctn-20-20">Hello from React !</h1>
				<p className="ctn-0-20">
					Service status: <span style={{ color: color }}>{status}</span>
				</p>
				<div className="ctn-20-20">
					<p className="prg">
						Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
						consectetur. Lorem <span className="red">ipsum dolor</span> sit amet
						consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
						amet consectetur. Lorem ipsum dolor sit amet consectetur.{" "}
						<span className="bold">Lorem ipsum</span> dolor sit amet consectetur.
						Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
						consectetur.
						<br />
						<br />
						<span className="italic">Lorem ipsum dolor sit amet consectetur.</span>
					</p>
				</div>
				<div className="ctn-0-20">
					<button className="btn-alt mr-20" onClick={toggleModal}>
						Open modal
					</button>
					<button className="btn">Button 2</button>
				</div>
				<Modal title="This is a modal" opened={modalOpened} atClose={toggleModal}>
					<p className="prg">
						Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
						consectetur. Lorem <span className="red">ipsum dolor</span> sit amet
						consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
						amet consectetur. Lorem ipsum dolor sit amet consectetur.
					</p>
				</Modal>
			</React.Fragment>
		</Page>
	);
};

export default App;
