import { NavLink, Outlet, useNavigate } from "react-router";
import { assets } from "../assets/assets";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="shadow py-4">
        <div className="px-5 flex justify-between items-center">
          <img
            onClick={() => navigate("/")}
            className="max-sm:w-32 cursor-pointer"
            src={assets.logo}
            alt=""
          />
          <div className="flex items-center gap-3">
            <p className="max-sm:hidden">Welcome, Job Board</p>
            <div className="relative group">
              <img
                className="w-8 rounded-full cursor-pointer"
                src={assets.company_icon}
                alt=""
              />
              {/* Hover Dropdown */}
              <div className="absolute hidden group-hover:block top-0 -left-10 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md text-sm shadow-md">
                  <li className="py-1 px-4 cursor-pointer hover:bg-gray-100">
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flex Body (Sidebar + Outlet) */}
      <div className="flex flex-1 min-h-0">
        {/* Left Sidebar */}
        <div className="w-60 border-r-2 border-gray-200 min-h-screen">
          <ul className="flex flex-col items-start pt-5 text-gray-800">
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full ${
                  isActive ? "bg-blue-100 border-r-4 border-blue-500" : ""
                }`
              }
              to="/dashboard/add-job"
            >
              <img className="min-w-4" src={assets.add_icon} alt="" />
              <p className="max-sm:hidden">Add Job</p>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full ${
                  isActive ? "bg-blue-100 border-r-4 border-blue-500" : ""
                }`
              }
              to="/dashboard/manage-jobs"
            >
              <img className="min-w-4" src={assets.home_icon} alt="" />
              <p className="max-sm:hidden">Manage Jobs</p>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full ${
                  isActive ? "bg-blue-100 border-r-4 border-blue-500" : ""
                }`
              }
              to="/dashboard/view-applications"
            >
              <img className="min-w-4" src={assets.person_icon} alt="" />
              <p className="max-sm:hidden">View Applications</p>
            </NavLink>
          </ul>
        </div>

        {/* Right Page Content */}
        <div className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
