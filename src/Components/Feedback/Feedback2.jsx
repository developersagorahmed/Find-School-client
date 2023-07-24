import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const Feedback2 = () => {
	const [feedback, setFeedback] = useState([]);
	useEffect(() => {
		fetch("https://server-school.vercel.app/feedback2")
			.then((res) => res.json())
			.then((data) => setFeedback(data));
	}, []);
	return (
		<div>
			<h2 className="mt-6  text-center text-3xl font-bold underline mb-10 text-[#474745]">
				Students Review
			</h2>

			<div className="container mx-auto rounded-md mt-10">
				<Carousel
					className="h-[60vh] mt-2"
					infiniteLoop={true}
					autoPlay={true}
					interval={3000}
				>
					{feedback?.map((item) => (
						<>
							<div className="card lg:card-side bg-base-100 shadow-xl">
								<figure className="w-6/12">
									<img
										className="w-6/12"
										src={item?.collageImage}
										alt="Album"
									/>
								</figure>
								<div className="card-body">
									<h2 className="card-title">Collage Name : {item?.collage}</h2>
									<p className="italic text-xl text-left">
										Feedback : {item?.feedback}
									</p>
									<h3 className="text-left text-xl font-semibold">
										Student Name : {item?.name}
									</h3>
									<h3 className="text-left text-lg font-semibold">
										Student Email : {item?.email}
									</h3>
									<div className="card-actions justify-center">
										<div>
											<Rating
												style={{ maxWidth: 150 }}
												readonly
												value={item?.rating}
											/>
										</div>
									</div>
								</div>
							</div>
						</>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default Feedback2;
