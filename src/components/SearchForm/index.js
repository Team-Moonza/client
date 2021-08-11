import React, { useState } from "react";

function SearchForm({ getResult }) {
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getResult(user);
  };

  const updateInput = (e) => {
    const input = e.target.value;
    setUser(input);
  };

  return (
    <form aria-label='form' onSubmit={handleSubmit}>
      <label for='User'>User</label>
      <input id='User' type='text' onChange={updateInput} />
      <input type='submit' value='Search' />
    </form>
  );
}

export default SearchForm;
