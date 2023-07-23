import React, { useEffect, useState } from "react";
import CollageCard from "./CollageCard";

const Collages = () => {
	const [collages, setCollages] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/allClass")
			.then((res) => res.json())
			.then((data) => setCollages(data));
	}, []);
	return (
		<div className=" container w-full mx-auto">
			<h2 className="mt-10 pt-10 text-center text-3xl font-bold underline mb-10 text-[#E7B622]">
				All Collages
			</h2>

			<div className="ml-10 container mx-auto  grid grid-cols-1 md:grid-cols-3">
				{collages?.map((collage) => (
					<CollageCard key={collage._id} data={collage}></CollageCard>
				))}
			</div>
		</div>
	);
};

export default Collages;
