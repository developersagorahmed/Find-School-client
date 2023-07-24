import React, { useContext, useState } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Apply = () => {
	const { user } = useContext(AuthContext);
	const allData = useLoaderData();
	const [error, setError] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [phone, setPhone] = useState("");
	const [dateOfBirth, setDateOfBirth] = useState("");
	const [address, setAddress] = useState("");
	const [img, setImg] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = {
			allData,
			name,
			email: user?.email,
			subject,
			phone,
			dateOfBirth,
			address,
			img,
		};

		fetch("https://server-school.vercel.app/apply", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.message) {
					Swal.fire({
						position: "top-center",
						icon: "error",
						title: "You Already Admitted",
						showConfirmButton: false,
						timer: 1500,
					});
				}
				console.log(data);
				if (data.acknowledged == true) {
					Swal.fire({
						position: "top-center",
						icon: "success",
						title: "Admission Successful",
						showConfirmButton: false,
						timer: 1500,
					});
					navigate("/");
				}
			});
	};

	return (
		<div className="mx-auto ">
			<h2 className="mt-6  text-center text-3xl font-bold underline mb-6 text-[#474745]">
				Apply here
			</h2>
			<div className="md:ml-[500px]">
				<form onSubmit={handleSubmit} className="card-body">
					<p className="text-red-800">{error}</p>
					<div className="form-control">
						Your Name
						<input
							onChange={(e) => setName(e.target.value)}
							name="text"
							type="text"
							placeholder="Your Name"
							className="input w-[300px] input-bordered rounded-md"
						/>
					</div>
					<div className="form-control">
						Email
						<input
							onChange={(e) => setEmail(e.target.value)}
							name="email"
							type="email"
							placeholder="email"
							className="input w-[300px] input-bordered rounded-md"
							defaultValue={user?.email}
						/>
					</div>
					<div className="w-[300px] form-control">
						Select Subject
						<select
							onChange={(e) => setSubject(e.target.value)}
							className="select select-bordered w-full max-w-xs"
						>
							<option disabled selected>
								Select Subject
							</option>
							<option>Computer Science</option>
							<option>Economics</option>
							<option>Mathematics</option>
							<option>Chemistry</option>
							<option>Geography</option>
							<option>Physics</option>
							<option>Science</option>
							<option>Statistics</option>
							<option>Microbiolo</option>
						</select>
						<div className="form-control">
							Phone Number
							<input
								onChange={(e) => setPhone(e.target.value)}
								name="number"
								type="number"
								placeholder="Phone Number"
								className="input input-bordered rounded-md"
							/>
						</div>
						<div className="form-control">
							Date Of Birth
							<input
								onChange={(e) => setDateOfBirth(e.target.value)}
								name="date"
								type="date"
								placeholder="Phone Number"
								className="input input-bordered rounded-md"
							/>
						</div>
						<div className="form-control">
							Your Address
							<input
								onChange={(e) => setAddress(e.target.value)}
								name="address"
								type="text"
								placeholder="Your address"
								className="input input-bordered rounded-md"
							/>
						</div>
						<div className="form-control">
							Your Image URL
							<input
								onChange={(e) => setImg(e.target.value)}
								name="image"
								type="text"
								placeholder="Your Image URL"
								className="input input-bordered rounded-md"
							/>
						</div>
					</div>

					<div className="form-control mt-6">
						<button
							type="submit"
							name="submit"
							className="bg-[#7CB342] w-[300px] btn text-black font-bold btn-primary rounded-md"
						>
							Apply
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Apply;
