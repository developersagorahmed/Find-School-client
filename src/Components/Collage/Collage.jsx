import React, { useEffect, useState } from "react";
import CollageCard from "../Collages/CollageCard";

const Collage = () => {
	const [collages, setCollages] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/allClass")
			.then((res) => res.json())
			.then((data) => setCollages(data));
	}, []);
	return (
		<div>
			<h2 className="mt-6  text-center text-3xl font-bold underline mb-10 text-[#474745]">
				All Collage
			</h2>
			<div className="ml-10 container mx-auto  grid grid-cols-1 md:grid-cols-3">
				{collages?.map((collage) => (
					<CollageCard key={collage._id} data={collage}></CollageCard>
				))}
			</div>
		</div>
	);
};

export default Collage;
