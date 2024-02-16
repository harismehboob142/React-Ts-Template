import React from "react";
// import React from "react";
// import { ROUTES } from "constant";
// import { useAuthContext } from "context/authContext";
// import { Navigate, Outlet } from "react-router-dom";
// import { LoadingComponent } from "components";

// type Props = {};

// const ProtectedRoutes = (props: Props) => {
//   const { user, isLoading } = useAuthContext();

//   if (isLoading) {
//     return <LoadingComponent isLogo={true} height={100} />;
//   }

//   return user ? <Outlet /> : <Navigate to={ROUTES.AUTH.LOGIN} />;
// };

// export default ProtectedRoutes;


const ProtectedRoutes = () => {
  return <div>ProtectedRoutes</div>;
};

export default ProtectedRoutes;
