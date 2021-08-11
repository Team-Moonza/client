import React, { useState } from "react";
import { Result } from "../../components";

const Profile = () => {
  //   const [user, setUser] = useState("");
  let user = "humza1997";

  const handleSubmit = (e) => {
    e.preventDefault();
    let input = e.target.value;
    setUser(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>User</label>
        <input id='User' type='text' value={user} onChange={(e) => setUser(e.target.value)} />
        <input type='submit' value='Search' />
      </form>
      <Result user={user} />
      <p>Heres your profile</p>;
    </div>
  );
};

export default Profile;
