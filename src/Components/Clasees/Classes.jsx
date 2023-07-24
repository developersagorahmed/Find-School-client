import { useEffect, useState } from "react";
import SingleClass from "./SingleClass";

const Classes = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("/data.json")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);
	return (
		<div className="max-w-[1240px] mx-auto mb-8">
			
				<h2 className="mt-6  text-center text-3xl font-bold underline mb-10 text-[#474745]">
				Classes for Your Daughter
			
			</h2>
			<div className="grid md:grid-cols-3 gap-4 px-3">
				{data.map((singleCard, index) => (
					<SingleClass key={index} singleData={singleCard} />
				))}
			</div>
		</div>
	);
};

export default Classes;
