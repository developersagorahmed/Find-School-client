import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const RCard = ({ data }) => {
	console.log(data);
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{data?.authors}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{data?.title}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Website Link</Button>
			</CardActions>
		</Card>
	);
};

export default RCard;
