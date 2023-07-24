import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("https://server-school.vercel.app/allClass")
			.then((res) => res.json())
			.then((dat) => setData(dat));
	}, []);
	console.log(data);
	let count = 1;
	return (
		<div className="overflow-x-auto">
			<table className="table">
				{/* head */}
				<thead className="text-left">
					<tr>
						<th>SL.No</th>
						<th>College Name</th>
						<th>Admission Last Date </th>
						<th>Admission Process</th>
						<th>Admission Process</th>
					</tr>
				</thead>
				<tbody>
					{/* row 1 */}
					{data?.map((item, index) => (
						<>
							<tr className="bg-base-200 text-left">
								<th>{count++}</th>
								<td>{item?.college_name}</td>
								<td>{item?.admission_dates}</td>
								<td>{item?.admission_process}</td>
								<td>
									<Link to={`/details/${item?._id}`}>
										<button className="border  p-3  font-bold duration-500 hover:bg-black hover:text-[#00AEEF]">
											Apply Now
										</button>
									</Link>
								</td>
							</tr>
						</>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Admission;
