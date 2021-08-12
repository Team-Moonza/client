import React, { useState } from "react";
import { Result, Navbar } from "../../components";
import "./style.css";
const Profile = () => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(input);
  };

  const onChange = (e) => setInput(e.target.value);

  return (
    <div>
      <Navbar />
      <div id='form'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='User'>User</label>
          <input name='User' id='User' type='text' value={input} onChange={onChange} />
          <input type='submit' value='Search' />
        </form>
      </div>
      <Result user={user} />
    </div>
  );
};

export default Profile;
