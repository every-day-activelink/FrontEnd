import { Outlet } from "react-router";
import Navigation from "./Navigation";

export default function Root() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Outlet />
    </div>
  );
}
