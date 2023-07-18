import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Loading from "./components/Loading/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, [3000]);
  }, []);
  return (
    <div className=" font-Montserrat">{loading ? <Loading /> : <Home />}</div>
  );
};

export default App;
