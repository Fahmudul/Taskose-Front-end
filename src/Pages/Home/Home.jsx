import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const data = fetch("http://localhost:5000/users").then((res) => res.json());
    setData(data);
  }, []);
  return (
    <div>
      <p>hello {data.message}</p>
    </div>
  );
};

export default Home;
