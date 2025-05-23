import { useState } from "react";
import { assets, jobsApplied } from "../assets/assets";
import moment from "moment";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Applications = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 2xl:px-20 my-10">
        <h2 className="text-xl font-semibold">Your Resume</h2>
        <div className="flex gap-2 mb-6 mt-3">
          {isEdit ? (
            <>
              <label htmlFor="resumeUpload" className="flex items-center">
                <p className="text-gray-600 px-4 py-2 rounded-lg">
                  Select Resume ➡️
                </p>
                <input
                  id="resumeUpload"
                  onChange={(e) => setResume(e.target.files[0])}
                  accept="application/pdf"
                  type="file"
                  hidden
                />
                <img
                  src={assets.profile_upload_icon}
                  className="cursor-pointer"
                  alt=""
                />
              </label>
              <button
                onClick={() => setIsEdit(false)}
                className="bg-green-100 border border-green-400 rounded-lg px-4 py-2 cursor-pointer"
              >
                Save
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <a
                className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg"
                href=""
              >
                Resume
              </a>
              <button
                onClick={() => setIsEdit(true)}
                className="text-gray-500 border border-gray-300 rounded-lg px-4 py-2 cursor-pointer"
              >
                Edit
              </button>
            </div>
          )}
        </div>

        <h2 className="text-xl font-semibold mb-4">Jobs Applied</h2>
        <table className="min-w-full bg-white rounded-lg">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b border-gray-200 text-left">
                Company
              </th>
              <th className="py-3 px-4 border-b border-gray-200 text-left">
                Job Title
              </th>
              <th className="py-3 px-4 border-b border-gray-200 text-left max-sm:hidden">
                Location
              </th>
              <th className="py-3 px-4 border-b border-gray-200 text-left max-sm:hidden">
                Date
              </th>
              <th className="py-3 px-4 border-b border-gray-200 text-left">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {jobsApplied.map((job, index) => (
              <tr key={index}>
                <td className="py-3 px-4 flex items-center gap-2 border-b border-gray-200">
                  <img className="w-8 h-8" src={job.logo} alt="" />
                  {job.company}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {job.title}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 max-sm:hidden">
                  {job.location}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 max-sm:hidden">
                  {moment(job.date).format("ll")}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <span
                    className={`${
                      job.status === "Accepted"
                        ? "bg-green-100"
                        : job.status === "Rejected"
                        ? "bg-red-100"
                        : "bg-blue-100"
                    } px-4 py-1.5 rounded`}
                  >
                    {job.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Applications;
