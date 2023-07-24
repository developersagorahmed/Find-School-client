import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const MyCollage = () => {
	const [collage, setCollage] = useState([]);
	const { user } = useContext(AuthContext);
	const { email } = user;

	useEffect(() => {
		fetch(`http://localhost:5000/MyCollage/${email}`)
			.then((res) => res.json())
			.then((data) => setCollage(data));
	}, []);
	let count = 1;
	return (
		<div>
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>Serial</th>
							<th>Image</th>
							<th>Collage Name</th>
							<th>Candidate Name</th>
							<th>Subject</th>
							<th>Phone Number</th>
							<th>Feedback</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						{collage?.map((item) => (
							<>
								<tr>
									<th>{count++}</th>
									<th>
										<div className="avatar">
											<div className="w-10 rounded-xl">
												<img src={item?.college_image} />
											</div>
										</div>
									</th>
									<th>{item?.allData?.college_name}</th>
									<th>{item?.name}</th>
									<th>{item?.subject}</th>
									<th>{item?.phone}</th>
									<th>
										<Link to={`/feedback/${item?.allData?._id}`}>
											<button className="btn bg-[#EF6331]">feedback</button>
										</Link>
									</th>
								</tr>
							</>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyCollage;
