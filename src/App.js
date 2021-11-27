import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";
import Home from "./pages/Home/index.js";
import Loader from "./components/shared/Loader/index.js";

require("dotenv").config();

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
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
