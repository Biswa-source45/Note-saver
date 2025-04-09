import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Paste from "./Components/Paste";
import ViewPaste from "./Components/ViewPaste";
import Navbar from "./Components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar/>
        <Home />
      </>
    ),
  },
  {
    path: "/pastes",
    element: 
    <>
      <Navbar/>
      <Paste/>
    </>,
  },
  {
    path: "/pastes/:id",
    element: 
    <>
      <Navbar/>
      <ViewPaste/>
    </>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
