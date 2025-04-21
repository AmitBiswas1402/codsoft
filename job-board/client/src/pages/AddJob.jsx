import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import { JobCategories, JobLocations } from "../assets/assets";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Bangalore");
  const [category, setCategory] = useState("Programming");
  const [level, setLevel] = useState("Beginner Level");
  const [salary, setSalary] = useState(0);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return (
    <form>
      <div>
        <p>Job Type</p>
        <input
          type="text"
          placeholder="Type Here"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
      </div>

      <div>
        <p>Job Description</p>
        <div ref={editorRef}></div>
      </div>

      <div>
        <div>
          <p>Job Category</p>
          <select onChange={(e) => setCategory(e.target.value)} id="">
            {JobCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <div>
          <p>Job Location</p>
          <select onChange={(e) => setLocation(e.target.value)} id="">
            {JobLocations.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <div>
          <p>Job Levels</p>
          <select onChange={(e) => setLevel(e.target.value)} id="">
                <option value="Benginner Level">Beginner Level</option>
                <option value="Intermediate Level">Intermediate Level</option>
                <option value="Senior Level">Senior Level</option>            
          </select>
        </div>
      </div>

      <div>
        <div>
          <p>Job Location</p>
          <select onChange={(e) => setSalary(e.target.value)} placeholder="Salary" type="Number">
            
          </select>
        </div>
      </div>      

    </form>
  );
};
export default AddJob;
