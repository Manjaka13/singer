import React, { FC } from "react";
import "helpers/icons";
import "leaflet/dist/leaflet.css";
import "react-slideshow-image/dist/styles.css";
import "styles/index.scss";
import { ISingerProps } from "helpers/interface";
import { AuthProvider } from "hooks/";

/*
	Main entry
*/

const Singer: FC<ISingerProps> = ({
	Component,
	pageProps,
}): JSX.Element => (
	<AuthProvider>
		<Component { ...pageProps } />
	</AuthProvider>
);

export default Singer;
