import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./footer/Footer";
import "./Layouts.scss";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
