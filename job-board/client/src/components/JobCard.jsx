import { assets } from "../assets/assets";

const JobCard = ({ job }) => {
  return (
    <div className="p-6 shadow rounded">
      <div className="flex justify-between items-center">
        <img className="h-8" src={assets.company_icon} alt="logo" />
      </div>
      <h4 className="font-medium text-2xl mt-2">{job.title}</h4>
      <div className="flex items-center gap-3 mt-2 text-xs">
        <span className="bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">
          {job.location}
        </span>
        <span className="bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">
          {job.level}
        </span>
      </div>
      <p
        className="text-gray-500 text-sm mt-4"
        dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}
      ></p>
      <div className="mt-4 flex gap-4 text-sm">
        <button className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded">
          Apply Now
        </button>
        <button className="cursor-pointer text-gray-500 bg-blue-200 border-gray-500 rounded px-4 py-2">
          Learn More
        </button>
      </div>
    </div>
  );
};
export default JobCard;
