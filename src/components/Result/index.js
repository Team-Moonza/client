import React, { useEffect, useState } from "react";
import axios from "axios";

function Result(props) {
  const user = props.user;
  const api = `https://api.github.com/users/${user}/repos`;
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        let { data } = await axios.get(api);
        setRepo(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchRepos();
  }, []);

  function mapRepo() {
    return repo.map((r) => {
      return (
        <div>
          <h1>{r.name}</h1>
          <p>{r.forks_count}</p>
        </div>
      );
    });
  }

  return <div>{mapRepo()}</div>;
}
export default Result;
