import UsersList from "./users/users-list.js";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
//json placeholder

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let fetchUsers = true;
    axios.get("https://jsonplaceholder.typicode.com/users").then((users) => {
      fetchUsers && setUsers(users.data);
    });

    return () => (fetchUsers = false);
  }, []);

  return (
    <div className="container">
      <div className="row  mt-5 ">
        <div className="col-lg">
          <h4 className="font-weight-bold mb-2">
            Users' List:{" "}
            <span style={{ fontSize: "initial" }}>
              <i>subcomponent</i>
            </span>
          </h4>
        </div>
      </div>

      <UsersList users={users} />
    </div>
  );
};

export default App;
