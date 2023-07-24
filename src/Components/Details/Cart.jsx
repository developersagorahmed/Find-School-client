import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
const Cart = ({ data }) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image={data?.image}
					alt="green iguana"
					className="h-[250px]"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{data?.event_name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{data?.description}
					</Typography>
				</CardContent>
				<CardActions>
					<h3 className="ml-2 text-red-700 font-semibold">
						{" "}
						Event Date : {data?.date} 2023
					</h3>
				</CardActions>
			</CardActionArea>
		</Card>
	);
};

export default Cart;
