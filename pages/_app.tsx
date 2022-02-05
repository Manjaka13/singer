import React from "react";
import "helpers/icons";
import "leaflet/dist/leaflet.css";
import "react-slideshow-image/dist/styles.css";
import "styles/index.scss";
import { ISingerProps } from "helpers/interface";
import { AuthProvider } from "hooks/";

const Singer: React.FC<ISingerProps> = ({
	Component,
	pageProps,
}): JSX.Element => (
	<AuthProvider>
		<Component {...pageProps} />
	</AuthProvider>
);

export default Singer;
