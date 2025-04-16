import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import ApplyJob from "./pages/ApplyJob"
import Applications from "./pages/Applications"

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        <Route path="/applications" element={<Applications />} />
      </Routes>
    </div>
  )
}
export default App