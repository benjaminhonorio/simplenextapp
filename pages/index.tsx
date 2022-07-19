import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [age, setAge] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      if (search) {
        const response = await fetch(
          `http://localhost:3000/api/hello?name=${search}`
        );
        const data = await response.json();
        if (!age) {
          setAge(data.age);
        }
        if (window.localStorage && search) {
          localStorage.setItem(search, data.age);
        }
      }
    })();
    console.log("times");
  }, [search]);

  useEffect(() => {
    const age = JSON.parse(localStorage.getItem("benja")!);
    if (age) {
      setAge(age);
    }
  }, []);

  return (
    <div>
      <label htmlFor="search">Buscar:</label>
      <input
        type="text"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <div>Edad: {age}</div>
    </div>
  );
};

export default Home;
