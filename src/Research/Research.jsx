import React, { useEffect, useState } from "react";
import RCard from "./RCard";

const Research = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("researcj.json")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);
	return (
		<div className="">
			<h2 className="mt-6  text-center text-3xl font-bold underline mb-10 text-[#474745]">
				Research Papers
			</h2>
			<div className="grid md:ml-20 grid-cols-1 md:grid-cols-3 gap-10 ">
				{data?.map((item, index) => (
					<RCard key={index} data={item}></RCard>
				))}
			</div>
		</div>
	);
};

export default Research;
