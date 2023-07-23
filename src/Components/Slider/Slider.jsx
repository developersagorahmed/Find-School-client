import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Slider = () => {
	return (
		<div className="container mx-auto rounded-md mt-10">
			<Carousel
				className="h-[60vh] mt-2"
				infiniteLoop={true}
				autoPlay={true}
				interval={3000}
			>
				<div>
					<img
						className="h-[60vh] rounded-md object-cover"
						src="https://i.ibb.co/RPw8dpG/caleb-woods-RIc-Mw-DLk1wo-unsplash.jpg"
					/>
				</div>
				<div>
					<img
						className="h-[60vh] rounded-md object-cover"
						src="https://i.ibb.co/kJYdXzM/javier-trueba-i-QPr1-Xk-F5-F0-unsplash.jpg"
					/>
				</div>
				<div>
					<img
						className="h-[60vh] rounded-md  object-cover"
						src="https://i.ibb.co/D77fP4B/vasily-koloda-8-Cq-Dv-Puo-k-I-unsplash.jpg"
					/>
				</div>
			</Carousel>
		</div>
	);
};

export default Slider;
