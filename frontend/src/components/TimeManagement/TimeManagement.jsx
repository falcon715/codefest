import { useState, useEffect, useLayoutEffect } from "react";
import { Link, Outlet } from "react-router-dom";

function TimeManagement() {
  const userId = "0001";
  // store the data
  const [data, setData] = useState({});

  // reading the database
  const fetchJson = () => {
    fetch("http://localhost:3000/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useLayoutEffect(() => {
    fetchJson();
  }, []);
  useEffect(() => {
    const timeout = setInterval(() => {
      fetchJson();
    }, 10000);
    return () => clearInterval(timeout);
  }, [data]);
  return (
    <div className="time">
      <Link to={`./project/`}>Add</Link>
    </div>
  );
}

export default TimeManagement;
