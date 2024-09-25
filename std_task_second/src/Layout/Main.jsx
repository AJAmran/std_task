import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <Header />

      <main className="flex-1 w-full mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
