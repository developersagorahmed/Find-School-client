import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import  { FaGoogle, FaGithub } from "react-icons/fa";
import  { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { signIn, handleGoogleSignIn, handleGithubSignIn } =
		useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const handleLogin = (event) => {
		event.preventDefault();
		if ((email, password)) {
			signIn(email, password)
				.then((result) => {
					const user = result.user;

					navigate(from, { replace: true });
					event.target.reset();
				})
				.catch((error) => setError(error.message));
		}
	};
	const loginWithGoogle = () => {
		handleGoogleSignIn()
			.then((result) => {
				const user = result.user;
				navigate(from);
			})
			.catch((error) => setError(error.message));
	};
	const loginWithGithub = () => {
		handleGithubSignIn()
			.then((result) => {
				const user = result.user;
				console.log(user);
				navigate(from);
			})
			.then((error) => setError(error.message));
	};
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<form onSubmit={handleLogin} className="card-body">
						<h2 className="mx-auto text-3xl font-bold underline text-[#7CB342]">
							Log in
						</h2>
						<p className="text-red-900">{error}</p>
						<div className="form-control">
							<span className="label-text">Email</span>

							<input
								onChange={(e) => setEmail(e.target.value)}
								type="email"
								placeholder="email"
								className="input input-bordered rounded-md"
								required
							/>
						</div>
						<div className="form-control">
							<span className="label-text">Password</span>

							<input
								onChange={(e) => setPassword(e.target.value)}
								type="password"
								placeholder="password"
								className="input input-bordered rounded-md"
								required
							/>
							<Link className="text-blue hover:underline" to="/register">
								<span className="text-blue"> Forget Password?</span>
							</Link>

							<a
								href="#"
								className="mt-3 text-base label-text-alt link link-hover"
							>
								<Link className="text-blue" to="/register">
									<p>
										Dont't have an Account
										<span className="text-blue underline"> Register</span>
									</p>
								</Link>
							</a>
						</div>
						<div className="mx-auto">
							<button
								onClick={loginWithGoogle}
								class="flex mt-4 bg-transparent hover:bg-[#7cb342] text-[#7cb342] font-bold hover:text-white py-2 px-4 border border-[#7cb342] hover:border-transparent rounded"
							>
								Login with Google{" "}
								<FaGoogle className="mt-1 ml-3 w-5 h-5"></FaGoogle>
							</button>
							<button
								onClick={loginWithGithub}
								class="flex mt-4 bg-transparent hover:bg-[#7cb342] text-[#7cb342] font-bold hover:text-white py-2 px-4 border border-[#7cb342] hover:border-transparent rounded"
							>
								Login with Github{" "}
								<FaGithub className="mt-1 ml-3 w-5 h-5"></FaGithub>
							</button>
						</div>
						<div className="form-control mt-6">
							<button className="rounded-md bg-[#7CB342] btn btn-primary">
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;