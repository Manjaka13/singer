import React from "react";
import Heading from "components/Heading";
import { IPageProps } from "helpers/interface";

/*
	Page component
	----------------
	@title: page title
	@image: page representation
	@description: page description
	@children: page content
*/

const Page: React.FC<IPageProps> = ({
	title,
	image,
	description,
	children,
}): JSX.Element => (
	<>
		<Heading title={title} image={image}>
			{description}
		</Heading>
		<main>
			{children}
		</main>
	</>
);

export default Page;
