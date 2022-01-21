import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "leaflet/dist/leaflet.css";
import "react-slideshow-image/dist/styles.css";
import "styles/index.scss";
import { ISingerProps } from "helpers/interface";
import { config } from "@fortawesome/fontawesome-svg-core";

// Manually add fontawesome styles
config.autoAddCss = false;

const Singer: React.FC<ISingerProps> = ({
	Component,
	pageProps,
}): JSX.Element => <Component {...pageProps} />;

export default Singer;
