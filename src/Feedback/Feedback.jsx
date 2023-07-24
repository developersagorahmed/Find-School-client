import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/Provider/AuthProvider";
import Swal from "sweetalert2";

const Feedback = () => {
	const data = useLoaderData();
	const { user } = useContext(AuthContext);
	const [feedback, setFeedback] = useState("");
	const [rating, setRating] = useState(0);
	const navigate = useNavigate();

	const feedbackSend = (event) => {
		event.preventDefault();

		const newData = {
			feedback,
			rating: parseInt(rating),
			name: user?.displayName,
			email: user?.email,
			collage: data?.college_name,
			collageImage: data?.college_image,
		};
		fetch("https://server-school.vercel.app/feedback", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newData),
		})
			.then((res) => res.json())
			.then((data2) => {
				if (data2.acknowledged == true) {
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: "Feedback Send Successful",
						showConfirmButton: false,
						timer: 1500,
					});
					navigate("/");
				}
			});
	};
	console.log(user);
	return (
		<div>
			<h2 className="mt-6  text-center text-3xl font-bold underline mb-10 text-[#474745]">
				Add Your Feedback
			</h2>
			<form onSubmit={feedbackSend}>
				<div className="flex justify-center">
					<div className=" ">
						<textarea
							onChange={(e) => setFeedback(e.target.value)}
							name="feedback"
							className="w-[300px] h-[150px] textarea textarea-primary"
							placeholder="Feedback"
						></textarea>
					</div>
				</div>
				<div className="form-control md:ml-[525px] ">
					<span className="label-text ">Rating</span>

					<input
						onChange={(e) => setRating(e.target.value)}
						type="number"
						min={0}
						max={5}
						placeholder="Rating"
						className="input w-[300px] input-bordered rounded-md"
						required
					/>
					<input
						className="w-[300px] mt-5 btn bg-[#023BAF] text-white hover:text-black "
						type="submit"
						value="Send"
					/>
				</div>
			</form>
		</div>
	);
};

export default Feedback;
