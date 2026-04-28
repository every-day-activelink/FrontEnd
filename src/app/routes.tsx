import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import FindMates from "./pages/FindMates";
import Groups from "./pages/Groups";
import Community from "./pages/Community";
import Friends from "./pages/Friends";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Root from "./components/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "find-mates", Component: FindMates },
      { path: "groups", Component: Groups },
      { path: "community", Component: Community },
      { path: "friends", Component: Friends },
      { path: "chat", Component: Chat },
      { path: "profile", Component: Profile },
      { path: "*", Component: Home },
    ],
  },
]);
