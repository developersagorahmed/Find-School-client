import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Login from "../Components/LoginAndLogout/Login";
import Register from "../Components/LoginAndLogout/Register";
import Slider from "../Components/Slider/Slider";
import App from "../Components/App/App";
import Details from "../Components/Details/Details";
import PrivateRoute from "../Components/Provider/PrivateRoute";
import Apply from "../Components/Apply/Apply";
import Admission from "../Admission/Admission";
import MyCollage from "../Components/MyCollage/MyCollage";
import Feedback from "../Feedback/Feedback";
import Feedback2 from "../Components/Feedback/Feedback2";
import Collage from "../Components/Collage/Collage";
import Profile from "../Components/Profile/Profile";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <App></App>,
			},
			{
				path: "login",
				element: <Login></Login>,
			},
			{
				path: "register",
				element: <Register></Register>,
			},
			{
				path: "details/:id",
				element: (
					<PrivateRoute>
						<Details></Details>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`http://localhost:5000/details/${params.id}`),
			},
			{
				path: "apply/:id",
				element: <Apply></Apply>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/details/${params.id}`),
			},
			{
				path: "admission",
				element: <Admission></Admission>,
			},
			{
				path: "collage",
				element: <Collage></Collage>,
			},
			{
				path: "myCollage/:email",
				element: <MyCollage></MyCollage>,
			},
			{
				path: "feedback/:id",
				element: <Feedback></Feedback>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/details/${params.id}`),
			},
			{
				path: "profile/:id",
				element: <Profile></Profile>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/profile/${params.id}`),
			},
		],
	},
]);
