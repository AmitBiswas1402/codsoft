import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { assets, JobCategories, JobLocations } from "../assets/assets";

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter } = useContext(AppContext);

  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row  max-lg:space-y-8 py-8">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-white px-4">
        {/* Search filter */}
        {isSearched &&
          (searchFilter.title !== "" || searchFilter.location !== "") && (
            <>
              <h3 className="font-medium text-lg mb-4">Current Search</h3>
              <div className="mb-4 text-gray-600">
                {searchFilter.title && (
                  <span className="inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">
                    {searchFilter.title}
                    <img
                      onClick={() =>
                        setSearchFilter((prev) => ({ ...prev, title: "" }))
                      }
                      className="cursor-pointer"
                      src={assets.cross_icon}
                      alt=""
                    />
                  </span>
                )}
                {searchFilter.location && (
                  <span className="inline-flex items-center gap-2.5 bg-red-50 border border-red-200 ml-2 px-4 py-1.5 rounded">
                    {searchFilter.location}
                    <img
                      onClick={() =>
                        setSearchFilter((prev) => ({ ...prev, location: "" }))
                      }
                      className="cursor-pointer"
                      src={assets.cross_icon}
                      alt=""
                    />
                  </span>
                )}
              </div>
            </>
          )}
          {/* Search by categories */}
          <div className="max-lg:hidden">
            <h4 className="font-medium text-lg py-4">Search By Categories</h4>
            <ul className="space-y-4 text-gray-600">
              {
                JobCategories.map((category, index) => (
                  <li className="flex gap-3 items-center" key={index}>
                    <input type="checkbox" className="sixe-125" name="" id="" />
                    {category}
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="max-lg:hidden">
            <h4 className="font-medium text-lg py-4 pt-14">Search By Location</h4>
            <ul className="space-y-4 text-gray-600">
              {
                JobLocations.map((category, index) => (
                  <li className="flex gap-3 items-center" key={index}>
                    <input type="checkbox" className="sixe-125" name="" id="" />
                    {category}
                  </li>
                ))
              }
            </ul>
          </div>
      </div>

      <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
        <h3 className="font-medium text-3xl py-2" id="job-list">Latest Jobs</h3>
        <p className="mb-8">Get your desired jobs</p>
        <div className="grid grid-col-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">

        </div>
      </section>
    </div>
  );
};
export default JobListing;
