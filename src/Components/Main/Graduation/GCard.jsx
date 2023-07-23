import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
const GCard = ({ data }) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				alt="green iguana"
				height="140"
				className="h-[250px]"
				image={data?.graduation_image}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{data?.collage_name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{data?.description}
				</Typography>
			</CardContent>
			<CardActions className="text-xl font-semibold">
				Graduation Year - {data?.graduation_year}
			</CardActions>
		</Card>
	);
};

export default GCard;
