import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "./components/shared/Loader/index.js";

require("dotenv").config();
const Home = React.lazy(() => import("./pages/Home/index.js"));

const Welcome = React.lazy(() => import("./components/welcome/index.js"));
export const Toastify = (type, msg) => {
  switch (type) {
    case "success":
      toast.success(msg);
      break;
    case "warning":
      toast.warn(msg);
      break;
    case "error":
      toast.error(msg);
      break;
    case "info":
      toast.info(msg);
      break;
    default:
      toast.info(msg);
      break;
  }
};

function App() {
  toast.configure({ hideProgressBar: true });
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
