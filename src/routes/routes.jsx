import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Notfound from "../pages/notfound/Notfound";
import Gigs from "../pages/gigs/Gigs";
import Gig from "../pages/gig/Gig";
import Orders from "../pages/orders/Orders";
import MyGigs from "../pages/myGig/MyGig";
import Add from "../pages/add/Add";
import Messages from "../pages/messages/Messages";
import Message from "../pages/message/Message";
import Home from "../pages/home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gigs",
        element: <Gigs />,
      },
      {
        path: "/gig/:id",
        element: <Gig />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/mygigs",
        element: <MyGigs />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/message/:id",
        element: <Message />,
      },
      {
        path: "*",
        element: <Notfound />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default routes;
