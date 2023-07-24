import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import Sports from "../Sports/Sports";

const Details = () => {
	const data = useLoaderData();
	console.log(data);
	return (
		<>
			<div>
				<div className="mt-10">
					<div
						className="hero h-[80vh]  mx-auto"
						style={{
							backgroundImage: `url(${data?.college_image})`,
						}}
					>
						<div className="hero-overlay bg-opacity-60"></div>
						<div className="hero-content text-left text-neutral-content">
							<div className="max-w-md">
								<h1 className="mb-5 text-5xl font-bold">
									{data?.college_name}
								</h1>
								<p className="mb-5 font-bold">{data?.research_history}</p>
								<h3 className="my-3 text-xl font-bold">
									Admission Start - {data?.admission_dates}
								</h3>

								<Link to={`/apply/${data._id}`}>
									<button className="border  p-3 px-10 font-bold duration-500 hover:bg-black hover:text-[#00AEEF]">
										Apply Now
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="mx-auto">
					<h2 className="mt-6  text-center text-3xl font-bold underline mb-10 text-[#474745]">
						Next All Event
					</h2>

					<div className="grid ml-20 grid-cols-1 md:grid-cols-3 mx-auto container">
						{data?.events?.map((eve, index) => (
							<Cart key={index} data={eve}></Cart>
						))}
					</div>
					<Sports data={data?.sports}></Sports>
				</div>
			</div>
			<div className="flex justify-center items-center mt-10">
				<Link to={`/apply/${data._id}`}>
					<button className="border  p-3 px-10 font-bold duration-500 hover:bg-black hover:text-[#00AEEF]">
						Apply Now
					</button>
				</Link>
			</div>
		</>
	);
};

export default Details;
