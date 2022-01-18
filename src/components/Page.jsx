import React, { useState } from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Copyright from "./Copyright";
import Cover from "./Cover";

/*
	Page layout
*/

const Page = ({ children }) => {
	const [menuOpened, setMenuOpened] = useState(false);
	const toggleMenu = () => setMenuOpened(!menuOpened);

	return (
		<main>
			<Navbar atTrigger={toggleMenu} />
			<Menu opened={menuOpened} atClose={toggleMenu} />
			<div className="page w-100 o-scroll">
				<Cover />
				{children}
				<div className="ctn">
					<p className="prg ctn-20-0">
						Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
						consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
						amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum
						dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem
						ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
					</p>
				</div>
				<div className="ctn">
					<p className="prg ctn-20-0">
						Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
						consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
						amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum
						dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem
						ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
					</p>
				</div>
				<div className="ctn">
					<p className="prg ctn-20-0">
						Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
						consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
						amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum
						dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem
						ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
					</p>
				</div>
				<div className="ctn">
					<p className="prg ctn-20-0">
						Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
						consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
						amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum
						dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem
						ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
						LAST
					</p>
				</div>
				<Copyright />
			</div>
		</main>
	);
};

export default Page;
