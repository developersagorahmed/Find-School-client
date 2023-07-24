import React from "react";
import Slider from "../Slider/Slider";
import Collages from "../Collages/Collages";
import Graduation from "../Main/Graduation/Graduation";
import Teachers from "../Teachers/Teachers";
import Feedback2 from "../Feedback/Feedback2";
import Research from "../../Research/Research";

const App = () => {
	return (
		<>
			<div>
				<div className="block lg:flex justify-center items-center ">
					<input
						onChange={(e) => setSearch(e.target.value)}
						type="text"
						placeholder="Search"
						className="input input-bordered rounded-s-full  w-[322px]  max-w-xs"
					/>
					<button className="btn  rounded-e-full w-[216px] max-w-xs">
						Search
					</button>
				</div>
			</div>
			<Slider></Slider>
			<Collages></Collages>
			<Graduation></Graduation>
			<Research></Research>
			<Teachers></Teachers>
			<Feedback2></Feedback2>
		</>
	);
};

export default App;
