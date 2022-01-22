import React from "react";
import "helpers/icons";
import "leaflet/dist/leaflet.css";
import "react-slideshow-image/dist/styles.css";
import "styles/index.scss";
import { ISingerProps } from "helpers/interface";

const Singer: React.FC<ISingerProps> = ({
	Component,
	pageProps,
}): JSX.Element => <Component {...pageProps} />;

export default Singer;
