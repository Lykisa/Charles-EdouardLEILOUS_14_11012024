import { createBrowserRouter } from "react-router-dom";
import Layout from './layout'
import Home from "./pages/Home";
import EmployeeList from "./pages/EmployeeList";

export const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element:
            <Home />
        },
        {
          path: "/employee-list",
          element:
            <EmployeeList />
        }
      ]
    },
  ]);