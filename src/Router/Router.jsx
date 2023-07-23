import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Login from "../Components/LoginAndLogout/Login";
import Register from "../Components/LoginAndLogout/Register";
import Slider from "../Components/Slider/Slider";
import App from "../Components/App/App";
import Details from "../Components/Details/Details";
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
				element: <Details></Details>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/details/${params.id}`),
			},
		],
	},
]);
