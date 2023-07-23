import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
const CollageCard = ({ data }) => {
	console.log(data);
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				alt="green iguana"
				height="140"
				className="h-[250px]"
				image={data?.college_image}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{data?.college_name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{data?.research_history.slice(0, 100)}
				</Typography>
			</CardContent>
			<CardActions>
				<Link
					to={`/details/${data?._id}`}
					className="mx-auto btn ont-bold text-white bg-[#3b3939]"
				>
					<Button className="text-white">Details</Button>
				</Link>
			</CardActions>
		</Card>
	);
};

export default CollageCard;
