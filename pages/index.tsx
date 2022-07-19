import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [age, setAge] = useState(0);
  const [search, setSearch] = useState("");
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://localhost:3000/api/hello?name=${search}`
      );
      const data = await response.json();
      setAge(data.age);
    })();
  }, [search]);

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
