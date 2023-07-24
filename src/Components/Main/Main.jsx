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

			<Outlet></Outlet>

			<Footer></Footer>
		</div>
	);
};

export default Main;
