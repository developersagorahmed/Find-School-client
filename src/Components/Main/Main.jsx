import React, { useState } from "react";
import Navbar from "../Home/Sheard/Navbar";
import { Outlet } from "react-router-dom";
import Graduation from "./Graduation/Graduation";
import Footer from "../Footer/Footer";

const Main = () => {
	const [search, setSearch] = useState("");
	console.log(search);
	return (
		<div>
			<Navbar></Navbar>
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
			<Outlet></Outlet>
			<Graduation></Graduation>
			<Footer></Footer>
		</div>
	);
};

export default Main;
