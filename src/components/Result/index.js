import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

function Result(props) {
  const user = props.user;
  const api = `https://api.github.com/users/${user}/repos`;
  const [repo, setRepo] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        let { data } = await axios.get(api);
        setRepo(data);
      } catch (err) {
        setError(err.message);
      }
    };
    if (user !== "") {
      fetchRepos();
    }
  }, [user]);

  function mapRepo() {
    return repo.map((r) => {
      return (
        <div id='repoCard'>
          <h2>{r.name}</h2>
          <div id='subCard'>
            <p>Fork Count: {r.forks_count}</p>
            <p>Stargazer Count: {r.stargazers_count}</p>
            <p>Watcher Count: {r.watchers_count}</p>
          </div>
        </div>
      );
    });
  }

  return <div>{mapRepo()}</div>;
}
export default Result;
