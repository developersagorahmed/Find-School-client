import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
const Scart = ({ data }) => {
	console.log(data);
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				alt="green iguana"
				height="140"
				className="h-[250px]"
				image={data?.img}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{data?.sport_name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{data?.description}
				</Typography>
			</CardContent>
			<CardActions></CardActions>
		</Card>
	);
};

export default Scart;
