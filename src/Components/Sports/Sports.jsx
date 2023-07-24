import React, { useEffect, useState } from "react";
import Scart from "./Scart";

const Sports = ({ data }) => {
	// const [data, setData] = useState([]);
	// useEffect(() => {
	// 	fetch("http://localhost:5000/allClass")
	// 		.then((res) => res.json())
	// 		.then((data) => setData(data));
	// }, []);

	return (
		<div>
			<h2 className="mt-6  text-center text-3xl font-bold underline mb-10 text-[#474745]">
				Sports Event
			</h2>

			<div className="grid grid-cols-1 md:ml-14 md:grid-cols-3 mx-auto">
				{data?.map((dat, index) => (
					<Scart key={index} data={dat}></Scart>
				))}
			</div>
		</div>
	);
};

export default Sports;
