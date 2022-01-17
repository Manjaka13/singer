import React from "react";

/*
	Use this component to display images
*/

const Image = ({ className, src, alt }) => (
	<figure className={"h-100 figure " + className}>
		<img className="h-100 figure__img" src={src} alt={alt || "Image"} />
	</figure>
);

export default Image;
