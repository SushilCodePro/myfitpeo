// import { BeakerIcon } from '@heroicons/react/24/solid'
// import { AcademicCapIcon } from '@heroicons/react/24/outline'
import Activity from "./components/dashboard/Activity.js";
import Dashboard from "./components/dashboard/Dasboard.js";
import Feedback from "./components/dashboard/Feedback.js";
import Menu from "./components/dashboard/Menu.js";
import NetProfit from "./components/dashboard/NetProfit.js";
import Order from "./components/dashboard/Order.js";
import NavBar from "./components/layout/NavBar.js";
import SideBar from "./components/layout/SideBar.js";

function App() {
  return (
    <div className="container mx-auto bg-black">
      <NavBar />
      <SideBar />
      <div className="ml-12 mt-13 p-2">
        <h1 className="text-xl text-white font-bold mb-4">Dashboard</h1>
        <div className="flex space-y-4 flex-col md:space-x-6 md:space-y-0 md:flex-row">
          <Dashboard />
          <NetProfit />
        </div>
        <div className="flex space-y-4 md:space-x-6 md:space-y-0 flex-col md:flex-row mt-4">
          <Activity />
          <Menu />
        </div>
        <div className="flex space-y-4 md:space-x-6 md:space-y-0 flex-col md:flex-row mt-4">
          <Order />
          <Feedback />
        </div>

      </div>
    </div>

  );
}

export default App;
