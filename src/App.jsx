import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { TaskTwo  } from "./page";
import { ResponsiveDrawer } from "./componenets";



const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<ResponsiveDrawer/>}>
        <Route path="/" element={<TaskTwo/>}/>
      </Route>
      
    )
  );
  return <RouterProvider router={routes} />;
};

export default App;
