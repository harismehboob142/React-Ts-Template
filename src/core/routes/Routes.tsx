import { Login } from "../../pages";
import { Title } from "@mantine/core";
import { Route, Routes as ReactRoutes } from "react-router-dom";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="" element={<Title>Homepage</Title>} />
      <Route path="/login" element={<Login />} />
    </ReactRoutes>
  );
};

export default Routes;
