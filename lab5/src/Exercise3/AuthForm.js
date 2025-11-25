import React, { useState } from "react";

export function AuthForm() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const user = { username, password };
    setUsers([...users, user]);

    setUsername("");
    setPassword("");
  }

  function deleteUser(index) {
    setUsers(users.filter((_, i) => i !== index));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Add User</button>
      </form>

      <ul>
        {users.map((u, i) => (
          <li key={i}>
            {u.username} / {u.password}
            <button onClick={() => deleteUser(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
