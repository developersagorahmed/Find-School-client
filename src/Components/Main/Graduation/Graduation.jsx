import React, { useEffect, useState } from "react";
import GCard from "./GCard";

const Graduation = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("graduation.json")
			.then((res) => res.json())
			.then((dat) => setData(dat));
	}, []);
	return (
		<div>
			<h2 className="mt-6  text-center text-3xl font-bold underline mb-10 text-[#474745]">
				Graduation Photo
			</h2>

			<div className="grid grid-cols-1 md:ml-10 md:grid-cols-3 mx-auto gap-24">
				{data?.map((item, index) => (
					<GCard key={index} data={item}></GCard>
				))}
			</div>
		</div>
	);
};

export default Graduation;
