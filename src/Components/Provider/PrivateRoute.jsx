import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "./AuthProvider";
import Loading from "./Loading";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return <Loading></Loading>;
	}

	if (user) {
		return children;
	}

	return <Navigate state={{ from: location }} to="/login "></Navigate>;
};

export default PrivateRoute;
