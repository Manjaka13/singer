import React, { useState, useEffect } from "react";
import { testService } from "../service";

const useTest = () => {
	const [result, setResult] = useState("HTTP service loading...");
	const [color, setColor] = useState("gold");

	useEffect(() => {
		setTimeout(() => {
			testService()
				.then((data) => {
					setResult(data);
					setColor("green");
				})
				.catch((e) => {
					console.log(e);
					setResult("HTTP service failed");
					setColor("red");
				});
		}, 1000);
	}, []);

	return [result, color];
};

export default useTest;
