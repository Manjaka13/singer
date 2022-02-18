import React, { FC } from "react";
import Head from "next/head";
import { IHeadingProps } from "helpers/interface";

/*
	Head of each page
*/

const Heading: FC<IHeadingProps> = ({
	title = "",
	description = "",
	image = ""
}): JSX.Element => (
	<Head>
		<meta charSet="utf-8" />
		<title>{ title }</title>
		<link rel="shortcut icon" href="/assets/singer.png" />
		<meta name="theme-color" content="#e30044" />
		<link rel="manifest" href="/manifest.json" />
		<meta name="robots" content="index, follow" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
		/>
		<meta httpEquiv="language" content="fr" />
		<meta name="author" content="Hari13 <manjaka.rajaonson@gmail.com>" />
		<meta name="description" content={ description } />
		<meta name="generator" content="NextJS" />
		<meta httpEquiv="language" content="fr" />
		<meta property="og:title" content={ title } />
		<meta property="og:description" content={ description } />
		<meta property="og:type" content="website" />
		<meta property="og:locale" content="fr_FR" />
		<meta property="og:image" content={ image } />
		<meta property="og:site_name" content="Singer Chantepie" />
	</Head>
);

export default Heading;
